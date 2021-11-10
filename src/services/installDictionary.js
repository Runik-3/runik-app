export default async function installDictionary(dictionaries) {
    // modal explaining steps?
    let dir = await window
        .showDirectoryPicker()
        .catch((error) => console.log(error));
    await dir
        .requestPermission({ mode: 'readwrite' })
        .catch((error) => console.log(error));

    // check device target
    if (true) {
        // perform KOBO conversion
        // nest through kobo file system and target dictionary dir
        try {
            dir = await dir.getDirectoryHandle('.kobo');
            dir = await dir.getDirectoryHandle('custom-dict');
        } catch (error) {
            console.log(error);
        }
        dictionaries.forEach(async (dict) => {
            // const fileReadStream = await readFile(dict).catch((error) =>
            //     console.log(error)
            // );
            console.log(dict);
            try {
                const file = await dir.getFileHandle(`test.zip`, {
                    create: true,
                });
                const stream = await file.createWritable();
                await stream.write({ type: 'write', data: dict }); // throw error here if doesn't write
                await stream.close();
                console.log('finished writing to device');
            } catch (error) {
                console.log(error);
            }
        });
    } else if (dir.name.includes('kindle'.toLowerCase())) {
        // perform kindle conversion
    }
}
