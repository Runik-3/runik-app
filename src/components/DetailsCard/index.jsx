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
        <div className="flex flex-col w-11/12 sm:w-5/6 xl:w-9/12 text-runik-neutral-dark pt-8">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-4xl font-bold mt-6 sm:mt-0">{title}</h3>
                    <h4 className="text-2xl">{author}</h4>
                </div>
                <div className="hidden sm:flex justify-center my-12 mr-0">
                    <Button
                        text="Add to Library"
                        url={url}
                        onclick={() => addToLibrary()}
                    />
                </div>
            </div>

            <div className="sm:flex ">
                <div className="w-full flex justify-center sm:block sm:w-3/6 sm:mr-20 md:w-2/6">
                    <img
                        src={thumbnail}
                        alt="Placeholder"
                        className="rounded-xl shadow-lg mt-6 sm:w-full"
                    />
                </div>
                <div className="flex sm:hidden justify-center my-12 mr-0">
                    <Button
                        text="Add to Library"
                        url={url}
                        onclick={() => addToLibrary()}
                    />
                </div>
                <p className="w-full mb-24 text-lg">{trim(description)}</p>
            </div>
        </div>
    );
};

export default DetailsCard;
