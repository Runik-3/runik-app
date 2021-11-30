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
