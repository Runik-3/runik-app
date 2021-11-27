import fetchDictionary from './fetchDictionary';
import getTitleFromUrl from './getTitleFromUrl';

/* eslint-disable no-plusplus */
export default async function handleLibraryRefs(library) {
    let dicts;
    if (library.length > 0) {
        const dictsArr = [];
        for (let i = 0; i < library.length; i++) {
            const libRef = library[i][0];
            const dictTitle = getTitleFromUrl(libRef.url);
            if (libRef.convertLang === undefined) {
                libRef.convertLang = 'en';
            }
            const dict = fetchDictionary(
                `https://dev.runik.app/api/dictionary/${dictTitle}?lang=${libRef.convertLang}&capacity=50`,
                dictTitle
            );
            dictsArr.push(dict);
        }
        dicts = await Promise.all(dictsArr);
    }
    return dicts;
}
