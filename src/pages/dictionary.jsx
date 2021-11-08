import axios from 'axios';
import { useEffect, useState } from 'react';
import convertDictionary from '../services/convertDictionary';

export default function dictionary() {
    // should wrap this entire thing up in hook after
    // it all works and return array of converted
    // files to be installed

    const [files, setFiles] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        const file = event.target.dictionary.files[0];
        setFiles([...files, file]);
    }

    useEffect(async () => {
        if (files.length > 0) {
            console.log('Converting...');
            const convertedDict = await convertDictionary(
                'kobo',
                'xdxf',
                'test',
                files
            );
            console.log('Dictionary converted... files ready to be installed');
            document.querySelector('.install-btn').style.display = 'block';
        }
    }, [files]);

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
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
                className="install-btn hidden mr-6 p-2 border-2 border-solid border-black"
            >
                Install Dictionary
            </button>
        </div>
    );
}
