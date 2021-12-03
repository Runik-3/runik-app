/* eslint-disable no-underscore-dangle */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */

import getTitleFromUrl from './getTitleFromUrl';

/* eslint-disable import/prefer-default-export */
export async function findDict(url, targetFormat, lang) {
    const response = await fetch(`/api/dictionary?url=${url}`).catch((err) => {
        throw new Error(err);
    });
    return response;
}

export async function addS3RefsToDb(uploadArr) {
    for (let i = 0; i < uploadArr.length; i++) {
        const upItem = uploadArr[i];
        const { target, lang, publicUrl, url } = upItem;
        const dbResult = await findDict(upItem.url, target, lang);
        const { name } = upItem.file;

        const isInDb = await dbResult.json();
        if (!isInDb.success) {
            const response = await fetch(
                `/api/dictionary?s3Url=${publicUrl}&targetFormat=${target}&lang=${lang}&name=${name}&url=${url}`,
                {
                    method: 'POST',
                }
            );
        } else {
            const response = await fetch(
                `/api/dictionary?s3Url=${publicUrl}&targetFormat=${target}&lang=${lang}&url=${url}`,
                {
                    method: 'PUT',
                    body: JSON.stringify(isInDb.data),
                }
            );
        }
    }
}

// file: File {name: 'red-rising', lastModified: 1638487746172, lastModifiedDate: Thu Dec 02 2021 15:29:06 GMT-0800 (Pacific Standard Time), webkitRelativePath: '', size: 15547, …}
// lang: "en"
// publicUrl: "https://runik-dictionary-files.s3.us-west-1.amazonaws.com/38a441828e6dadb2cbd2f0c7ec22031c.zip"
// secureUrl: "https://runik-dictionary-files.s3.us-west-1.amazonaws.com/38a441828e6dadb2cbd2f0c7ec22031c.zip?Content-Type=application%2Fzip&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAY3AZKJQ7NUDT767I%2F20211202%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20211202T232906Z&X-Amz-Expires=60&X-Amz-Signature=efc6038a295c2e7859080da12b8609feb43ec90a0293d57955cf8c174898d061&X-Amz-SignedHeaders=host"
// target: "kobo"

// returns db objects
export async function libraryDictsInDb(library, target) {
    const existsInDb = [];
    for (let i = 0; i < library.length; i++) {
        const libRef = library[i][0];
        const dictUrl = libRef.url;
        const existingDict = findDict(dictUrl);
        if (existingDict) {
            existsInDb.push(existingDict);
        }
    }
    const data = await Promise.all(existsInDb).catch((err) => {
        throw new Error(err);
    });

    const inDb = {};
    await Promise.all(
        data.map(async (result) => {
            const jsonObj = await result.json().catch((err) => {
                throw new Error(err);
            });

            if (jsonObj.success && jsonObj.data.dictionaries) {
                const targetFormatStore = jsonObj.data.dictionaries;
                if (targetFormatStore[target]) {
                    inDb[jsonObj.data.name] = targetFormatStore[target];
                }
            }
        })
    );

    return inDb;
}

export async function checkLibraryAgainstDb(library, inDb) {
    for (let i = 0; i < library.length; i++) {
        const libRef = library[i][0];
        const dictName = getTitleFromUrl(libRef.url);
        const dbObject = inDb[dictName];
        if (dbObject) {
            if (!libRef.convertLang) {
                libRef.convertLang = 'en';
            }
            const s3Url = dbObject[libRef.convertLang];
            libRef.s3Url = s3Url;
        }
    }
}

// export async function addToDb(title, lang, url) {}
