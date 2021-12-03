import generateS3Url from './s3Setup';

export default async function handler(req, res) {
    const { target } = req.query;
    const url = await generateS3Url(target);
    res.send({ url });
}
