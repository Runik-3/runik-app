/* eslint-disable dot-notation */
import mongoose, { Schema } from 'mongoose';

const dictionarySchema = new Schema({
    name: String,
    dictionaries: {
        kobo: [''],
        xdxf: [''],
    },
});

const Dictionary =
    mongoose.models.Dictionary ||
    mongoose.model('Dictionary', dictionarySchema);

export default Dictionary;
