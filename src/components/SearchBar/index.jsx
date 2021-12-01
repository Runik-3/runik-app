/* eslint-disable no-undef */
// eslint-disable-next-line react/prop-types
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import SearchBarDropdown from '../SearchBarDropdown';
import booksList from '../../data/booksList.json';

const options = {
    keys: [{ name: 'title', weight: 2 }, 'author'],
    distance: 100,
    threshold: 0.2,
    shouldSort: true,
};

const fuse = new Fuse(booksList, options);

const singleFuse = new Fuse(booksList, {
    keys: [{ name: 'title', weight: 2 }, 'author'],
    distance: 0,
    treshold: 0,
    shouldSort: true,
    minMatchCharLength: 1,
});

const doubleFuse = new Fuse(booksList, {
    keys: [{ name: 'title', weight: 2 }, 'author'],
    distance: 50,
    treshold: 0.1,
    shouldSort: true,
    minMatchCharLength: 2,
});

// eslint-disable-next-line react/prop-types
const SearchBar = ({ visibility, SearchHeight }) => {
    const [searchString, setSearchString] = useState('');
    const [liveResults, setLiveResults] = useState([]);

    function handleSearchInput(e) {
        setSearchString(e.target.value);
    }

    function filterSearch(string) {
        if (string.length === 1) {
            setLiveResults(singleFuse.search(string));
        } else if (string.length === 2) {
            setLiveResults(doubleFuse.search(string));
        } else {
            setLiveResults(fuse.search(string));
        }
    }

    useEffect(() => {
        if (searchString !== '') {
            filterSearch(searchString);
        }
    }, [searchString]);

    return (
        <div
            id="navigation"
            className="w-full z-20 h-search-bar-height bg-runik-neutral-light "
        >
            <div
                /* Work in progress */
                className={`w-4/6 mt-2 mx-auto min-w-max flex border border-[#BABABA] rounded-lg ${visibility}`}
            >
                {/* Work in progress prop ^ */}
                <input
                    type="text"
                    placeholder="Search a book to begin..."
                    className={`w-11/12 ${SearchHeight} border-0 rounded-lg text-xl font-spartan bg-runik-neutral-light text-gray-700 focus:ring-0 focus:border-gray-700`}
                    onChange={(e) => handleSearchInput(e)}
                />
                <Link
                    href={{
                        pathname: '/results',
                        query: { query: searchString },
                    }}
                >
                    <button
                        type="submit"
                        className="scale-75 transform -translate-y-1 hover:opacity-60 cursor-pointer transition-ease-in-out duration-500"
                    >
                        <svg
                            width={32}
                            height={32}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full pl-2 pt-1 z-index"
                        >
                            <path
                                d="M14.667 25.333c5.89 0 10.666-4.775 10.666-10.666S20.558 4 14.667 4 4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666zM28 28l-5.8-5.8"
                                stroke="#000"
                                strokeWidth={2.5}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </Link>
            </div>
            <div>
                <SearchBarDropdown
                    barVisibility={visibility}
                    dropdownVisibility={searchString ? 'block' : 'hidden'}
                    liveResults={liveResults}
                    search={searchString}
                />
            </div>
        </div>
    );
};

export default SearchBar;
