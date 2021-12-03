import generateS3Url from './s3Setup';

export default async function handler(req, res) {
    const { target, name, lang } = req.query;
    const url = await generateS3Url(target, name, lang);
    res.send({ url });
}
