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

    const convertedDict = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/xml',
        },
        body: inputFiles[0],
    }).catch((err) => {
        throw new Error(err);
    });
    const content = await convertedDict.blob();

    return content;
}
