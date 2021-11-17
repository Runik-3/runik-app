import convertBlobToFile from './convertBlobToFile';

export default async function fetchDictionary(
    queryString,
    fileName,
    fileType = 'xdxf'
) {
    const dict = await fetch(queryString).catch((err) => {
        throw new Error(err);
    });
    const dictContent = await dict.blob();
    const dictFile = convertBlobToFile(dictContent, fileName, fileType);
    return dictFile;
}

// api/dictionary/gameofthrones?lang=en&capacity=1000
