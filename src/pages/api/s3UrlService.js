import generateS3Url from './s3Setup';

export default async function handler(req, res) {
    const url = await generateS3Url();
    res.send({ url });
}
