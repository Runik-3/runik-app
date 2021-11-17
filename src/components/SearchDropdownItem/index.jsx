/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';
import PlusCircle from '../Icons/PlusCircle';
import { LibraryContext } from '../../context/libraryContext';
import booksList from '../../data/booksList.json';

export default function SearchDropdownItem({ title, url }) {
    // can run check to see if url is in library - isntead of +
    const [library, addReference] = useContext(LibraryContext);
    const [cardToBeAdded, setCardToBeAdded] = useState();

    function addToLibrary() {
        let duplicate;
        const bookToAdd = booksList.filter((book) => {
            return book.url === url;
        });

        console.log(library);
        library.map((ref) => {
            if (ref[0].url === bookToAdd[0].url) {
                duplicate = true;
            }
        });
        if (!duplicate) {
            addReference(bookToAdd);
        }
    }

    return (
        <li className="flex justify-between text-xl py-4 border-b-2 last:border-0 cursor-pointer">
            {title}
            <PlusCircle url={url} onclick={() => addToLibrary()} />
        </li>
    );
}
