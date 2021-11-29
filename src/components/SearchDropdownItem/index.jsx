/* eslint-disable react/no-danger */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import { useContext } from 'react';
import Link from 'next/link';
import PlusCircle from '../Icons/PlusCircle';
import { LibraryContext } from '../../context/libraryContext';
import booksList from '../../data/booksList.json';

export default function SearchDropdownItem({
    title,
    author,
    url,
    description,
    thumbnail,
    search,
}) {
    // can run check to see if url is in library - isntead of +
    const [library, addReference] = useContext(LibraryContext);

    function addToLibrary() {
        let duplicate;
        const bookToAdd = booksList.filter((book) => {
            return book.url === url;
        });

        // eslint-disable-next-line array-callback-return
        library.map((ref) => {
            if (ref[0].url === bookToAdd[0].url) {
                duplicate = true;
            }
        });
        if (!duplicate) {
            addReference(bookToAdd);
        }
    }

    const checkTitle = () => {
        const result = title.replace(
            new RegExp(search, 'gi'),
            (str) => `<strong>${str}</strong>`
        );
        return result;
    };

    const checkAuthor = () => {
        const result = author.replace(
            new RegExp(search, 'gi'),
            (str) => `<strong>${str}</strong>`
        );
        return result;
    };

    function toRender() {
        if (title.length === 0) {
            return (
                <li className="flex justify-between text-xl py-4 border-b-2 last:border-0 cursor-pointer">
                    No matches found.
                </li>
            );
        }
        return (
            <li className="flex justify-between text-xl py-4 border-b-2 last:border-0 cursor-pointer">
                <Link
                    href={{
                        pathname: '/details',
                        query: {
                            url: `${url}`,
                            title: `${title}`,
                            author: `${author}`,
                            description: `${description}`,
                            thumbnail: `${thumbnail}`,
                        },
                    }}
                >
                    <div
                        dangerouslySetInnerHTML={
                            author
                                ? {
                                      __html: `${checkTitle()} by ${checkAuthor()}`,
                                  }
                                : {
                                      __html: `${checkTitle()}`,
                                  }
                        }
                    />
                </Link>
                <PlusCircle url={url} onclick={() => addToLibrary()} />
            </li>
        );
    }

    return <div>{toRender()}</div>;
}
