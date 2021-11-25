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
const SearchBar = ({ visibility }) => {
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
        <div className="w-full">
            <div
                /* Work in progress */
                className={`w-2/3 mx-auto max-w-5xl flex border-b-2 border-l-0 border-r-0 border-t-0 border-runik-neutral-dark h-2/3 ${visibility}`}
            >
                {/* Work in progress prop ^ */}
                <input
                    type="text"
                    placeholder="Search dictionaries..."
                    className="w-full h-12 border-0 text-xl font-spartan text-gray-500 focus:ring-0 focus:border-gray-700"
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
                        className="scale-75 transform -translate-y-1"
                    >
                        <svg
                            width={41}
                            height={41}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            // eslint-disable-next-line react/jsx-props-no-spreading
                        >
                            <path
                                d="M18.792 32.458c7.548 0 13.666-6.118 13.666-13.666S26.34 5.125 18.792 5.125 5.125 11.244 5.125 18.792s6.119 13.666 13.667 13.666zM35.875 35.875l-7.431-7.431"
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
