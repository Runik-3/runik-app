/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import booksList from '../../../data/booksList.json';
import { LibraryContext } from '../../../context/libraryContext';

export default function PlusCircle({ url }) {
    const [, addReference] = useContext(LibraryContext);

    function addToLibrary() {
        const bookToAdd = booksList.filter((book) => {
            return book.url === url;
        });
        addReference(bookToAdd);
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="prefix__feather prefix__feather-plus-circle cursor-pointer hover:scale-110 transition-all"
            onClick={() => addToLibrary(url)}
        >
            <circle cx={12} cy={12} r={10} />
            <path d="M12 8v8M8 12h8" />
        </svg>
    );
}
