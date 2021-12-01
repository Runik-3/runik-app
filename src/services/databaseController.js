/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */

import getTitleFromUrl from './getTitleFromUrl';

/* eslint-disable import/prefer-default-export */
export async function findDict(title, targetFormat, lang) {
    const response = await fetch(`/api/dictionary?title=${title}`).catch(
        (err) => {
            throw new Error(err);
        }
    );
    return response;
}

export async function checkLibraryAgainstDb(library, target) {
    const existsInDb = [];
    // console.log(library[0]);
    for (let i = 0; i < library.length; i++) {
        const libRef = library[i][0];
        const dictTitle = getTitleFromUrl(libRef.url);
        const dictLang = libRef.convertLang;
        const existingDict = findDict(dictTitle);
        if (existingDict) {
            existsInDb.push(existingDict);
        }
        // console.log(libRef);
    }
    const results = await Promise.all(existsInDb).catch((err) => {
        throw new Error(err);
    });
    const data = await results;
    data.forEach(async (result) => {
        console.log(await result.json());
    });
    // console.log(data);
    // const response = await findDict(title, targetFormat, lang).catch((err) => {
    //     throw new Error(err);
    // });
    // const { data } = await response.json().catch((err) => {
    //     throw new Error(err);
    // });
    // const storedDicts = data[0].dictionaries[targetFormat]; // data array
    // storedDicts.foreach((format) => {});

    // console.log(await getS3UploadUrl());
}

// export async function addToDb(title, lang, url) {}
