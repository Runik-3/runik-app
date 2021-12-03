/* eslint-disable no-restricted-syntax */
export default async function installDictionaries(dictionaries) {
    // modal explaining steps?
    console.log(dictionaries);
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

        // iterate over directories in .kobo, point to appropriate dict location
        for await (const [, handle] of dir.entries()) {
            if (handle.name === 'custom-dict') {
                dir = handle;
            } else if (handle.name === 'dict') {
                dir = handle;
            }
        }

        dictionaries.forEach(async (dict) => {
            try {
                const file = await dir.getFileHandle(
                    `dicthtml-${dict.name}.zip`,
                    {
                        create: true,
                    }
                );
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
