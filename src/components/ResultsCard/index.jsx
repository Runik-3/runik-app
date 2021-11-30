/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import Link from 'next/link';
// import { add } from 'winston';
// import AddButton from '../Icons/AddButton';
import { useContext } from 'react';
import PlusCircleLarge from '../PlusCircleLarge';
import { LibraryContext } from '../../context/libraryContext';
import booksList from '../../data/booksList.json';

export default function ResultsCard({ libRef }) {
    const result = libRef.item;
    function trim(text, count) {
        return text.slice(0, count) + (text.length > count ? '...' : '');
    }

    const [library, addReference] = useContext(LibraryContext);

    function addToLibrary() {
        let duplicate;
        const bookToAdd = booksList.filter((book) => {
            return book.url === result.url;
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
        <div id="resultsCards" className="flex flex-row flex-wrap relative z-0">
            <div className="flex max-w-xs w-full bg-white rounded-lg overflow-hidden mx-auto max-h-full m-4 transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl">
                <div className="overflow-hidden rounded-xl relative movie-item text-white movie-card">
                    <div className="absolute inset-0 top-24 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-runik-neutral-dark to-transparent h-96" />
                    <div className="relative cursor-pointer group z-10 pl-3.5 pr-6 pt-6 space-y-20">
                        <div className="flex w-full justify-end">
                            <button
                                type="button"
                                className="hover:bg-runik-primary-light rounded-full"
                            >
                                <PlusCircleLarge
                                    url={result.url}
                                    onclick={() => addToLibrary()}
                                />
                            </button>
                        </div>
                        <Link
                            href={{
                                pathname: '/details',
                                query: {
                                    url: `${result.url}`,
                                },
                            }}
                        >
                            <div className="poster__info align-self-end w-full h-80">
                                <div className="h-32 m-6" />
                                <div className="space-y-6 detail_info">
                                    <div className="flex flex-col space-y-2 inner">
                                        <h3
                                            className="text-3xl font-semibold text-white"
                                            data-unsp-sanitized="clean"
                                        >
                                            {result.title}
                                        </h3>
                                    </div>
                                    <div className="flex flex-col overview">
                                        <div className="flex flex-col" />

                                        <p className="text-sm font-medium text-gray-100">
                                            {trim(result.description, 100)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <img
                        className="absolute inset-0 transform w-full -translate-y-4"
                        src={result.thumbnail}
                        alt="dictionaryImage"
                    />
                </div>
            </div>
        </div>
    );
}
