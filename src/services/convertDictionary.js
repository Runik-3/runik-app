import axios from 'axios';
import readUploadedFile from './readUploadedFile';

export default async function convertDictionary(
    targetDevice,
    inputFormat,
    dictionaryName,
    inputFiles // add iteration over array in future, to install multiple dicts
) {
    // live conversion api test environment
    const baseUrl = 'https://runik-conversion-api.herokuapp.com/';
    // api/<target_device>/<input_format>/<dictionary_title>
    const endpoints = `api/${targetDevice}/${inputFormat}/${dictionaryName}`;
    const url = baseUrl + endpoints;

    const binary = await readUploadedFile(inputFiles[0]).catch((err) =>
        console.log(err)
    );

    console.log(binary);

    const convertedDict = await axios
        .post(url, binary, {
            headers: { 'Content-Type': 'application/octet-stream' },
        })
        .then((data) => data)
        .catch((error) => console.log(error));
    console.log(convertedDict);

    return convertedDict;
}
