/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */

import getTitleFromUrl from './getTitleFromUrl';

/* eslint-disable import/prefer-default-export */
export async function getS3UploadUrl() {
    const data = await fetch(`/api/s3UrlService`).catch((err) => {
        throw new Error(err);
    });
    const dataJSON = await data.json();
    return dataJSON.url;
}

export async function uploadFileToS3(file, url, mimeType) {
    await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': mimeType,
        },
        body: file,
    });
}

export async function uploadCollectionToS3(fileCollection, library, target) {
    const collectionList = {};
    const collectionObjArray = [];

    for (let i = 0; i < fileCollection.length; i++) {
        const file = fileCollection[i];
        collectionList[file.name] = file;
    }

    for (let i = 0; i < library.length; i++) {
        const libRef = library[i][0];
        const collectionObj = {};
        if (!libRef.s3Url) {
            const secureUrl = await getS3UploadUrl().catch((err) => {
                throw new Error(err);
            });
            const libTitle = getTitleFromUrl(libRef.url);
            collectionObj.title = libTitle;
            collectionObj.secureUrl = secureUrl;
            collectionObj.file = collectionList[libTitle];
            collectionObj.target = target;
            collectionObj.lang = libRef.convertLang;
            collectionObjArray.push(collectionObj);
        }
    }

    for (let i = 0; i < collectionObjArray.length; i++) {
        const uploadItem = collectionObjArray[i];
        console.log(uploadItem.file.type);
        await uploadFileToS3(
            uploadItem.file,
            uploadItem.secureUrl,
            uploadItem.file.type
        ).catch((err) => {
            throw new Error(err);
        });
    }
}
