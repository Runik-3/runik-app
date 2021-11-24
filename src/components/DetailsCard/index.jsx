import { React, useContext } from 'react';
import Button from '../Button';
import { LibraryContext } from '../../context/libraryContext';
import booksList from '../../data/booksList.json';

// eslint-disable-next-line react/prop-types
const DetailsCard = ({ img, headerTitle, description }) => {
    const [library, addReference] = useContext(LibraryContext);

    function addToLibrary() {
        let duplicate;
        const bookToAdd = booksList.filter((book) => {
            return book.url === 'https://harrypotter.fandom.com/';
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
        <div className="flex text-runik-neutral-dark h-full ">
            <div className="overflow-hidden flex shadow-lg rounded-xl w-80 h-full mr-4">
                <img
                    src={img}
                    alt="Placeholder"
                    className="min-w-full rounded-xl"
                />
            </div>
            <div className="flex flex-col font-spartan w-5/12">
                <h3 className="pb-3 text-4xl">{headerTitle}</h3>
                <p className="">{description}</p>
                <div className="flex w-full h-full justify-end items-end">
                    <div>{/* <Button text="Add to Library" /> */}</div>
                    <Button
                        url="https://harrypotter.fandom.com/"
                        onclick={() => addToLibrary()}
                    />
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;
