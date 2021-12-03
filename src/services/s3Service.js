/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */

import getTitleFromUrl from './getTitleFromUrl';

/* eslint-disable import/prefer-default-export */
export async function getS3UploadUrl(target) {
    const data = await fetch(`/api/s3UrlService?target=${target}`).catch(
        (err) => {
            throw new Error(err);
        }
    );
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

function getPublicUrlFromSecure(secureUrl) {
    const publicUrl = secureUrl.split('?')[0];
    return publicUrl;
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
            const secureUrl = await getS3UploadUrl(target).catch((err) => {
                throw new Error(err);
            });
            const libTitle = getTitleFromUrl(libRef.url);
            const publicUrl = getPublicUrlFromSecure(secureUrl);
            collectionObj.secureUrl = secureUrl;
            collectionObj.publicUrl = publicUrl;
            collectionObj.file = collectionList[libTitle];
            collectionObj.target = target;
            collectionObj.lang = libRef.convertLang;
            collectionObj.url = libRef.url;
            collectionObjArray.push(collectionObj);
        }
    }

    for (let i = 0; i < collectionObjArray.length; i++) {
        const uploadItem = collectionObjArray[i];
        await uploadFileToS3(
            uploadItem.file,
            uploadItem.secureUrl,
            uploadItem.file.type
        );
    }
    return collectionObjArray;
}
