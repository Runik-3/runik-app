import axios from 'axios';

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

    const convertedDict = await axios
        .post(url, inputFiles[0])
        .then((data) => data)
        .catch((error) => console.log(error));
    return convertedDict;
}
