import fetchDictionary from './fetchDictionary';

/* eslint-disable no-plusplus */
export default async function handleLibraryRefs(library) {
    let dicts;
    if (library.length > 0) {
        const dictsArr = [];
        for (let i = 0; i < library.length; i++) {
            // parse url and name out of libRef
            // eslint-disable-next-line no-unused-vars
            const libRef = library[i];
            const dict = fetchDictionary(
                'https://runik-generator.herokuapp.com/api/dictionary/gameofthrones?lang=en&capacity=100',
                'test'
            );
            dictsArr.push(dict);
        }
        dicts = await Promise.all(dictsArr);
    }
    return dicts;
}
