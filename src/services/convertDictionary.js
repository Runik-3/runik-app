import fetchDictionary from './fetchDictionary';

// takes in library of refs and returns converted
// dictionaries for the correct target device
export default async function convertDictionary(
    states,
    library,
    targetDevice,
    dictionaryName,
    inputFormat = 'xdxf'
) {
    async function handleLibraryRefs() {
        if (library.length > 0) {
            library.map(async (/* libRef, i */) => {
                // when object, use ref to send right data to generator enpoints
                const dict = await fetchDictionary(
                    'http://ec2-18-144-45-206.us-west-1.compute.amazonaws.com:8000/api/dictionary/gameofthrones?lang=en&capacity=1000',
                    'test'
                );
                states.setFiles([...states.files, dict]);
            });
        }
    }

    async function dictConverter(inputFile) {
        // live conversion api test environment
        const baseUrl =
            'http://ec2-54-219-83-200.us-west-1.compute.amazonaws.com:8080/';
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

        return content;
    }

    async function handleRawDicts() {
        console.log(library.length);
        if (library.length > 0) {
            library.map(async (libRef, i) => {
                states.setStatus(
                    `Converting dictionary ${i} of ${library.length}`
                );
                const convertedDict = await dictConverter(libRef).catch(
                    (err) => {
                        throw new Error(err);
                    }
                );
                states.setConvertedDicts([
                    ...states.convertedDicts,
                    convertedDict,
                ]);
            });
            states.setStatus(
                'Dictionaries converted... files ready to be installed'
            );
        }
        return states.dicts;
    }
    await handleLibraryRefs();
    await handleRawDicts();
}
