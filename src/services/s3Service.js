/* eslint-disable no-plusplus */

import getTitleFromUrl from './getTitleFromUrl';

/* eslint-disable import/prefer-default-export */
export async function getS3UploadUrl() {
    const data = await fetch('/api/s3UrlService').catch((err) => {
        throw new Error(err);
    });
    const dataJSON = await data.json();
    return dataJSON.url;
}

export async function uploadFileToS3(file, url) {
    await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body: file,
    });
}

export async function uploadCollectionToS3(fileCollection, library) {
    const collectionList = {};

    for (let i = 0; i < fileCollection.length; i++) {
        const file = fileCollection[i];
        collectionList[file.name] = '';
    }

    for (let i = 0; i < library.length; i++) {
        const secureUrl = getS3UploadUrl();
        const libRef = library[i][0];
        const libTitle = getTitleFromUrl(libRef.url);
        collectionList[libTitle] = secureUrl;
    }
    // need to figure this out
    const collectionObj = await Promise.allValues(collectionList);
    console.log(collectionObj);
}
