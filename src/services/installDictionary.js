export default async function installDictionary(dictionaries) {
    // modal explaining steps?
    let dir = await window.showDirectoryPicker().catch((error) => {
        throw new Error(error);
    });
    await dir.requestPermission({ mode: 'readwrite' }).catch((error) => {
        throw new Error(error);
    });

    // check device target
    if (dir.name.toLowerCase().includes('kobo')) {
        // perform KOBO conversion
        // nest through kobo file system and target dictionary dir

        dir = await dir.getDirectoryHandle('.kobo').catch((error) => {
            throw new Error(error);
        });

        dir = await dir.getDirectoryHandle('custom-dict').catch(async () => {
            dir = await dir.getDirectoryHandle('dict').catch((err) => {
                throw new Error(err);
            });
        });

        dictionaries.forEach(async (dict) => {
            try {
                const file = await dir.getFileHandle(`test.zip`, {
                    create: true,
                });
                const stream = await file.createWritable();
                await stream.write({ type: 'write', data: dict }); // throw error here if doesn't write
                await stream.close();
            } catch (error) {
                throw new Error(error);
            }
        });
    } else if (dir.name.toLowerCase().includes('kindle')) {
        // perform kindle conversion
    }
}
