/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
import formidable from 'formidable';
import axios from 'axios';
import generateS3Url from './s3Setup';
import getTitleFromUrl from '../../services/getTitleFromUrl';
import { getPublicUrlFromSecure } from '../../services/s3Controller';

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    // this function only has to take in files, target, and their names
    // it will generate a url and upload the files to s3, returning a
    // json object {name, publicUrl}
    if (req.method === 'POST') {
        const { target } = req.query;

        const collectionData = new formidable.IncomingForm({
            multiples: true,
            keepExtensions: true,
        });

        collectionData.uploadDir = './';
        collectionData.keepExtensions = true;
        let [library, fileCollection] = await new Promise((resolve, reject) => {
            collectionData.parse(req, (err, fields, files) => {
                if (!err) {
                    resolve([fields, files]);
                } else {
                    reject(err);
                }
            });
        });

        const collectionObjArray = [];

        // for (let i = 0; i < fileCollection.length; i++) {
        //     const file = fileCollection[i];
        //     collectionList[file.name] = file;
        // }

        library = JSON.parse(library.library);

        for (let i = 0; i < library.length; i++) {
            const libRef = library[i][0];
            const collectionObj = {};
            if (!libRef.s3Url) {
                const name = getTitleFromUrl(libRef.url);
                const secureUrl = await generateS3Url(
                    target,
                    name,
                    libRef.convertLang
                ).catch((err) => {
                    throw new Error(err);
                });

                // append public url to object to be accessed on frontend
                const libTitle = getTitleFromUrl(libRef.url);
                const publicUrl = getPublicUrlFromSecure(secureUrl);
                collectionObj.secureUrl = secureUrl;
                collectionObj.publicUrl = publicUrl;
                collectionObj.file = fileCollection[libTitle];
                collectionObj.target = target;
                collectionObj.lang = libRef.convertLang;
                collectionObj.url = libRef.url;
                collectionObjArray.push(collectionObj);
                console.log(collectionObjArray);

                // upload dictionary file to s3
                const response = await axios.put(
                    collectionObj.secureUrl,
                    collectionObj.file
                );
            }
        }
        res.json({ collection: collectionObjArray });
    } else {
        res.status(404).send('Invalid request');
    }

    //    const url = await generateS3Url(target, name, lang);
}
