import { React, useContext } from 'react';
import Button from '../Button';
import { LibraryContext } from '../../context/libraryContext';
import booksList from '../../data/booksList.json';

// eslint-disable-next-line react/prop-types
const DetailsCard = ({ url, title, author, description, thumbnail }) => {
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

    function trim(text) {
        if (text === undefined) {
            return text;
        }
        const count = 2500;
        return text.slice(0, count) + (text.length > count ? '...' : '');
    }

    return (
        // direction-row
        <div className="flex bg-gradient-to-b from-runik-neutral-light to-runik-background-blue text-runik-neutral-dark pt-10">
            <div className="flex flex-col items-center rounded-xl">
                <Button
                    text="Add to Library"
                    url={url}
                    onclick={() => addToLibrary()}
                />
                <img
                    src={thumbnail}
                    alt="Placeholder"
                    className="rounded-xl shadow-lg mt-6 w-details-image-width h-details-image-height"
                />
            </div>
            <div className="flex-col font-spartan ml-10 w-content-width">
                <h3 className="text-4xl font-bold">{title}</h3>
                <h4 className="text-2xl mb-10">{author}</h4>
                <p className="">{trim(description)}</p>
            </div>
        </div>
    );
};

export default DetailsCard;
