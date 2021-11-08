export default async function installDictionary(dictionaries) {
    // modal explaining steps?
    let dir = await window
        .showDirectoryPicker()
        .catch((error) => console.log(error));
    await dir
        .requestPermission({ mode: 'readwrite' })
        .catch((error) => console.log(error));

    // check device target
    if (dir.name.includes('KOBO' || 'kobo' || 'Kobo')) {
        // perform KOBO conversion
        // nest through kobo file system and target dictionary dir
        try {
            dir = await dir.getDirectoryHandle('.kobo');
            dir = await dir.getDirectoryHandle('custom-dict');
        } catch (error) {
            console.log(error);
        }
        dictionaries.forEach(async (dict) => {
            try {
                const file = await dir.getFileHandle(dict.name, {
                    create: true,
                });
                const stream = await file.createWritable();
                await stream.write(dict.data);
                await stream.close();
            } catch (error) {
                console.log(error);
            }
        });
    } else if (dir.name.includes('kindle' || 'Kindle' || 'KINDLE')) {
        // perform kindle conversion
    }
}
