import { useEffect, useState } from 'react';
import convertDictionary from '../services/convertDictionary';
import installDictionary from '../services/installDictionary';

export default function dictionary() {
    // should wrap this entire thing up in hook after
    // it all works and return array of converted
    // files to be installed
    const convertedDicts = [];
    const [files, setFiles] = useState([]);

    function handleConvert(event) {
        event.preventDefault();
        const file = event.target.dictionary.files[0];
        setFiles([...files, file]);
    }

    function handleInstall(event) {
        event.preventDefault();
        installDictionary(convertedDicts);
    }

    useEffect(async () => {
        if (files.length > 0) {
            // if files is empty, don't convert
            console.log('Converting...');
            const convertedDict = await convertDictionary(
                'kobo',
                'xdxf',
                'test',
                files
            ).catch((error) => console.log(error));
            convertedDicts.push(convertedDict);
            console.log('Dictionary converted... files ready to be installed');
            // document.querySelector('.install-btn').style.display = 'block';
        }
    }, [files]);

    return (
        <div>
            <form onSubmit={(e) => handleConvert(e)}>
                <label htmlFor="xdxf">Upload .xdxf file:</label>
                <input name="dictionary" id="xdxf" type="file" />
                <button
                    type="submit"
                    className="mr-6 p-2 border-2 border-solid border-black"
                >
                    Convert Dictionary
                </button>
            </form>
            <button
                type="button"
                className="install-btn mr-6 p-2 border-2 border-solid border-black"
                onClick={(e) => handleInstall(e)}
            >
                Install Dictionary
            </button>
        </div>
    );
}
