/* eslint-disable dot-notation */
import mongoose, { Schema } from 'mongoose';

const dictionarySchema = new Schema({
    name: String,
    kobo: [
        {
            language: String,
            url: String,
        },
    ],
    xdxf: [
        {
            language: String,
            url: String,
        },
    ],
});

const Dictionary =
    mongoose.models.Dictionary ||
    mongoose.model('Dictionary', dictionarySchema);

export default Dictionary;
