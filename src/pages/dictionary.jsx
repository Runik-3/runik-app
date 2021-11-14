import { useContext, useState } from 'react';
import installDictionary from '../services/installDictionary';
import { LibraryContext } from '../context/libraryContext';
import useDictionaryStates from '../hooks/useDictionaryStates';
import convertDictionary from '../services/convertDictionary';

export default function dictionary() {
    // should wrap this entire thing up in hook after
    // it all works and return array of converted
    // files to be installed

    // necessary states to be passed to various functions
    const { library } = useContext(LibraryContext);
    const states = useDictionaryStates();

    async function handleGetDict() {
        await convertDictionary(states, library, 'kobo', 'test');
        console.log(states.dicts);
    }

    async function handleInstall() {
        await installDictionary((await states).status);
    }
    // function handleConvert(event) {
    //     event.preventDefault();
    // }

    // async function handleInstall(event) {
    //     event.preventDefault();
    //     await installDictionary(dicts);
    //     setStatus('Dictionary installed');
    // }

    // // this use effect to set convertedDicts custom hook returns convertedDicts array
    // useEffect(async () => {
    //     if (files.length > 0) {
    //         // if files is empty, don't convert
    //         setStatus('Converting...');
    //         const convertedDict = await convertDictionary(
    //             'kobo',
    //             'xdxf',
    //             'test',
    //             files
    //         ).catch((error) => {
    //             throw new Error(error);
    //         });
    //         setDicts([...dicts, convertedDict]);
    //         setStatus('Dictionary converted... files ready to be installed');
    //         // document.querySelector('.install-btn').style.display = 'block';
    //     }
    // }, [files]);

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
            {library}
        </div>
    );
}
