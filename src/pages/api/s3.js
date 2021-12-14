import generateS3Url from './s3Setup';

const allowedReferers = [
    'https://runik.app/',
    'https://runik-app-mauve.vercel.app/',
    'http://localhost:8080/',
];

export default async function handler(req, res) {
    const { referer } = req.headers;
    console.log(referer);
    let sameOrigin = false;
    if (referer) {
        allowedReferers.forEach((allowed) => {
            if (allowed === referer) {
                sameOrigin = true;
            }
        });
    }
    if (sameOrigin) {
        const { target, name, lang } = req.query;
        const url = await generateS3Url(target, name, lang);
        res.send({ url });
    } else {
        res.status(403).json({
            success: false,
            message: 'Request not from same origin.',
        });
    }
}
