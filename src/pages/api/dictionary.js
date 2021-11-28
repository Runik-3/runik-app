/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
import dbConnect from './db';
import Dictionary from '../../models/dictionaryModel';

export default async function handler(req, res) {
    const { name, targetFormat, lang, url } = req.query;
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'GET':
            const dict = await Dictionary.find({
                name: name,
                dictionaries: { targetFormat: [{ lang: lang }] },
            }).catch(() => {
                res.status(404).json({
                    success: false,
                    msg: 'unable to find dictionary',
                });
            });
            res.status(200).json({ success: true, data: dict });
            break;

        case 'POST':
            const createDict = new Dictionary();
            createDict.name = name;
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
