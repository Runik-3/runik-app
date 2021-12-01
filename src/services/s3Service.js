/* eslint-disable import/prefer-default-export */
export async function getS3Url() {
    const data = await fetch('/api/s3UrlService').catch((err) => {
        throw new Error(err);
    });
    const dataJSON = await data.json();
    return dataJSON.url;
}

// export async function
