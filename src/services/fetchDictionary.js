import convertBlobToFile from './convertBlobToFile';

export default async function fetchDictionary(queryString) {
    const dict = await fetch(queryString).catch((err) => console.log(err));
    const dictContent = await dict.blob();
    console.log(dictContent);
    const dictFile = convertBlobToFile(dictContent, 'dict-test.xdxf', 'xml');
    return dictFile;
}

// api/dictionary/gameofthrones?lang=en&capacity=1000
