/* eslint-disable no-plusplus */
import { useContext, useEffect } from 'react';
import installDictionary from '../services/installDictionary';
import { LibraryContext } from '../context/libraryContext';
import convertDictionary from '../services/convertDictionary';
import handleLibraryRefs from '../services/handleLibraryRefs';
import useDictionaryStates from '../hooks/useDictionaryStates';

export default function dictionary() {
    // necessary states to be passed to various functions
    const { library } = useContext(LibraryContext);
    const states = useDictionaryStates();

    async function handleGetDict() {
        states.setStatus(
            library.length === 1
                ? `Generating words list for ${library.length} dictionary...`
                : `Generating words list for ${library.length} dictionaries...`
        );
        const rawDicts = await handleLibraryRefs(library).catch((err) => {
            throw new Error(err);
        });
        states.setStatus('Words list generated');
        states.setDicts(rawDicts);
    }

    async function handleInstall() {
        await installDictionary(states.convertedDicts).catch((err) => {
            throw new Error(err);
        });
        states.setStatus('Dictionaries installed!');
    }

    useEffect(async () => {
        if (states.dicts.length > 0) {
            let converted = [];
            states.setStatus('Converting dictionaries...');
            for (let i = 0; i < states.dicts.length; i++) {
                const dict = states.dicts[i];
                const convertedDict = convertDictionary(
                    dict,
                    'kobo',
                    'gameofthrones'
                );
                converted.push(convertedDict);
            }
            converted = await Promise.all(converted).catch((err) => {
                throw new Error(err);
            });
            states.setConvertedDicts(converted);
            states.setStatus(
                'Dictionaries converted and ready to be installed'
            );
        }
    }, [states.dicts]);

    return (
        <div>
            <form>
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
            <p>{states.status}</p>
        </div>
    );
}
