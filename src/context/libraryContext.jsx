import { createContext, useState } from 'react';

export const LibraryContext = createContext();

// eslint-disable-next-line react/prop-types
export const LibraryProvider = ({ children }) => {
    const [library, setLibrary] = useState([]);

    function addReference(dict) {
        setLibrary([...library, dict]);
    }

    function removeReference(url) {
        setLibrary(library.filter((dict) => dict.url !== url));
    }

    return (
        <LibraryContext.Provider
            value={[library, addReference, removeReference]}
        >
            {children}
        </LibraryContext.Provider>
    );
};
