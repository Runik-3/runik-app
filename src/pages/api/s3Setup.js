import aws from 'aws-sdk';
import crypto from 'crypto';
import { promisify } from 'util';

const randomBytes = promisify(crypto.randomBytes);

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

export default async function generateS3Url() {
    const rawBytes = randomBytes(16);
    const fileName = rawBytes.toString('hex');

    const params = {
        Bucket: bucketName,
        Key: fileName,
        Expires: 60,
    };

    const uploadUrl = await s3.getSignedUrlPromise('putObject', params);
    return uploadUrl;
}
