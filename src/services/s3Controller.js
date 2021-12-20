/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */

import convertBlobToFile from './convertBlobToFile';
import getTitleFromUrl from './getTitleFromUrl';

/* eslint-disable import/prefer-default-export */
export async function getS3UploadUrl(target, name, lang) {
    const data = await fetch(
        `/api/s3?target=${target}&lang=${lang}&name=${name}`
    ).catch((err) => {
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

export function getPublicUrlFromSecure(secureUrl) {
    const publicUrl = secureUrl.split('?')[0];
    return publicUrl;
}

export async function uploadCollectionToS3(fileCollection, library, target) {
    const collectionData = new FormData();

    collectionData.append('library', JSON.stringify(library));
    fileCollection.forEach((file) => {
        collectionData.append(file.name, file);
    });

    const response = await fetch(`/api/s3?target=${target}`, {
        method: 'POST',
        body: collectionData,
    });

    const collectionObjArray = await response.json();

    // for (let i = 0; i < collectionObjArray.length; i++) {
    //     const uploadItem = collectionObjArray[i];
    //     await uploadFileToS3(
    //         uploadItem.file,
    //         uploadItem.secureUrl,
    //         uploadItem.file.type
    //     );
    // }
    // return collectionObjArray;
}

export async function pullDictsFromS3(library) {
    const dictsFromDb = [];
    for (let i = 0; i < library.length; i++) {
        const libRef = library[i][0];

        if (libRef.s3Url) {
            const response = await fetch(libRef.s3Url);
            const fileData = await response.blob();

            const dictFile = convertBlobToFile(
                fileData,
                getTitleFromUrl(libRef.url),
                'zip'
            );
            dictsFromDb.push(dictFile);
        }
    }
    return dictsFromDb;
}
