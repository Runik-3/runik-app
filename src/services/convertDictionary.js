/* eslint-disable no-plusplus */

import convertBlobToFile from './convertBlobToFile';

// takes in library of refs and returns converted
// dictionaries for the correct target device
export default async function convertDictionary(
    inputFile,
    targetDevice,
    dictionaryName,
    inputFormat = 'xdxf'
) {
    // live conversion api test environment
    const baseUrl = 'https://dev.runik.app/';
    // const baseUrl = 'http://localhost:8000/';

    const endpoints = `api/${targetDevice.toLowerCase()}/${inputFormat}/${dictionaryName}`;
    const url = baseUrl + endpoints;

    const convertedDict = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/xml',
        },
        body: inputFile,
    }).catch((err) => {
        throw new Error(err);
    });
    if (convertedDict.status === 200) {
        const content = await convertedDict.blob();
        const convertedFile = convertBlobToFile(content, inputFile.name, 'zip');
        return convertedFile;
    }
    return { error: 'There was an error converting the dictionary.' };
}
