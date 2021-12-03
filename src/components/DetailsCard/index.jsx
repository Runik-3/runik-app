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
        <div className="flex flex-col w-5/6 text-runik-neutral-dark pt-10">
            <div>
                <h3 className="text-4xl font-bold mt-6">{title}</h3>
                <h4 className="text-2xl">{author}</h4>
            </div>
            <img
                src={thumbnail}
                alt="Placeholder"
                className="rounded-xl shadow-lg mt-6 max-w-xs items-center"
            />

            <div className="my-12 mr-0 w-full ">
                <Button
                    text="Add to Library"
                    url={url}
                    onclick={() => addToLibrary()}
                />
                <p className="">{trim(description)}</p>
            </div>
        </div>
    );
};

export default DetailsCard;
