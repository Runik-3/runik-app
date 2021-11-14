import { createContext, useState } from 'react';

export const LibraryContext = createContext({});

// eslint-disable-next-line react/prop-types
export const LibraryProvider = ({ children }) => {
    const [library, setLibrary] = useState(['test', 'test']);

    function addDictionary(dict) {
        setLibrary([...library, dict]);
    }

    function removeDictionary(url) {
        setLibrary(library.filter((dict) => dict.url !== url));
    }

    return (
        <LibraryContext.Provider
            value={{ library, addDictionary, removeDictionary }}
        >
            {children}
        </LibraryContext.Provider>
    );
};
