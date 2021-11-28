import dbConnect from './db';
import Dictionary from '../../models/dictionaryModel';

export default function handler(req, res) {
    const { name, lang } = req.query;

    res.status(404).send('hi');
}
