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
    const baseUrl = 'http://dev.runik.app/';
    // api/<target_device>/<input_format>/<dictionary_title>
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
    const content = await convertedDict.blob();
    const convertedFile = convertBlobToFile(content, inputFile.name, 'zip');

    return convertedFile;
}
