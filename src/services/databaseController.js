/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */

import getTitleFromUrl from './getTitleFromUrl';

/* eslint-disable import/prefer-default-export */
export async function findDict(title, targetFormat, lang) {
    const response = await fetch(`/api/dictionary?url=${title}`).catch(
        (err) => {
            throw new Error(err);
        }
    );
    return response;
}

// returns db objects
export async function libraryDictsInDb(library, target) {
    const existsInDb = [];
    for (let i = 0; i < library.length; i++) {
        const libRef = library[i][0];
        const dictUrl = libRef.url;
        const dictLang = libRef.convertLang;
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
