import aws from 'aws-sdk';

const region = 'us-west-1';
const bucketName = 'runik-dictionary-files';
const accessKeyId = process.env.S3_ACCESS;
const secretAccessKey = process.env.S3_SECRET;

const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4',
});

export async function generateS3Url(target, name, lang) {
    let fileName;
    if (target === 'kobo') {
        fileName = `dicthtml-${name}-${lang}.zip`;
    } else if (target === 'xdxf') {
        fileName = 'xdxf';
    }

    const params = {
        Bucket: bucketName,
        Key: fileName,
        ContentType: 'application/zip',
        Expires: 60,
    };

    const uploadUrl = await s3.getSignedUrlPromise('putObject', params);
    return uploadUrl;
}

export { s3 };
