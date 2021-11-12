import { useEffect, useState } from 'react';
import convertDictionary from '../services/convertDictionary';
import installDictionary from '../services/installDictionary';
import fetchDictionary from '../services/fetchDictionary';

export default function dictionary() {
    // should wrap this entire thing up in hook after
    // it all works and return array of converted
    // files to be installed
    const convertedDicts = [];
    const [files, setFiles] = useState([]);
    const [status, setStatus] = useState('');

    async function handleGetDict() {
        const dict = await fetchDictionary(
            'http://ec2-18-144-45-206.us-west-1.compute.amazonaws.com:8000/api/dictionary/gameofthrones?lang=en&capacity=1000'
        );
        setFiles([...files, dict]);
    }

    function handleConvert(event) {
        event.preventDefault();
        const file = event.target.dictionary.files[0];
        setFiles([...files, file]);
    }

    async function handleInstall(event) {
        event.preventDefault();
        await installDictionary(convertedDicts);
    }

    useEffect(async () => {
        if (files.length > 0) {
            // if files is empty, don't convert
            setStatus('Converting...');
            const convertedDict = await convertDictionary(
                'kobo',
                'xdxf',
                'test',
                files
            ).catch((error) => {
                throw new Error(error);
            });
            convertedDicts.push(convertedDict);
            setStatus('Dictionary converted... files ready to be installed');
            // document.querySelector('.install-btn').style.display = 'block';
        }
    }, [files]);

    return (
        <div>
            <form onSubmit={(e) => handleConvert(e)}>
                <span>Upload .xdxf file:</span>
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
                onClick={() => handleGetDict()}
            >
                Fetch Dict
            </button>
            <button
                type="button"
                className="install-btn mr-6 p-2 border-2 border-solid border-black"
                onClick={(e) => handleInstall(e)}
            >
                Install Dictionary
            </button>
            {status}
        </div>
    );
}
