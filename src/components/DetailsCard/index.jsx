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

    return (
        // direction-row
        <div className="flex w-11/12 2xl:w-full bg-gradient-to-b from-runik-neutral-light to-runik-background-blue text-runik-neutral-dark">
            <div className="flex h-full w-full shadow-lg rounded-xl mr-4">
                <img
                    src={thumbnail}
                    alt="Placeholder"
                    className="w-full h-full rounded-xl"
                />
            </div>
            <div className="flex font-spartan">
                <div className="flex flex-col justify-between h-1/3">
                    <h3 className=" text-4xl">{title}</h3>
                    <h4 className=" text-3xl">{author}</h4>
                    <p className="">{description}</p>
                </div>
                <div className="flex h-full justify-end items-end">
                    <Button
                        text="Add to Library"
                        url={url}
                        onclick={() => addToLibrary()}
                    />
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;
