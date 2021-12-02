/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
import dbConnect from './db';
import Dictionary from '../../models/dictionaryModel';
import getTitleFromUrl from '../../services/getTitleFromUrl';

export default async function handler(req, res) {
    const { url, targetFormat, lang, s3Url } = req.query;
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'GET':
            const dict = await Dictionary.findOne({
                url: url,
            }).catch((err) => {
                throw new Error(err);
            });
            if (dict) {
                res.status(200).json({ success: true, data: dict });
            } else {
                res.status(404).json({
                    success: false,
                    msg: 'unable to find dictionary',
                });
            }
            break;

        case 'POST':
            const createDict = new Dictionary();
            createDict.title = getTitleFromUrl(url);
            createDict.dictionaries[targetFormat] = [{ lang, url: 'tset' }];

            const entry = await Dictionary.create(createDict);
            res.status(200).json({ success: true, data: entry });
            break;

        default:
            res.status(404).json({ success: false });
            break;
    }

    // res.status(404).send('hi');
}
