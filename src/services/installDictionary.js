export default async function installDictionary(dictionaries) {
    // modal explaining steps?
    const dir = await window
        .showDirectoryPicker()
        .catch((error) => console.log(error));
    await dir
        .requestPermission({ mode: 'readwrite' })
        .catch((error) => console.log(error));

    // check device target
    if (dir.name.includes('kobo' || 'KOBO' || 'Kobo')) {
        // perform KOBO conversion
        // nest through kobo file system and target dictionary dir
        // try {
        //     dir = await dir.getDirectoryHandle('.kobo');
        //     dir = await dir.getDirectoryHandle('custom-dict');
        // } catch (error) {
        //     console.log(error);
        // }
        dictionaries.forEach(async (dict) => {
            console.log(dict.data);
            try {
                const file = await dir.getFileHandle(
                    `dicthtml-gameofthrones-en.kobo.zip`,
                    {
                        create: true,
                    }
                );
                const stream = await file.createWritable();
                await stream.write({ type: 'write', data: dict.data }); // throw error here if doesn't write
                await stream.close();
                console.log('finished writing to device');
            } catch (error) {
                console.log(error);
            }
        });
    } else if (dir.name.includes('kindle' || 'Kindle' || 'KINDLE')) {
        // perform kindle conversion
    }
}
