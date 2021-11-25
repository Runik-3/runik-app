/* eslint-disable no-undef */
// eslint-disable-next-line react/prop-types
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import SearchBarDropdown from '../SearchBarDropdown';
import booksList from '../../data/booksList.json';

const options = {
    keys: ['title', 'author'],
};
const fuse = new Fuse(booksList, options);

// eslint-disable-next-line react/prop-types
const SearchBar = ({ visibility }) => {
    const [searchString, setSearchString] = useState('');
    const [liveResults, setLiveResults] = useState([]);

    function handleSearchInput(e) {
        setSearchString(e.target.value);
    }

    function filterSearch(string) {
        setLiveResults(fuse.search(string));
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
                            width={32}
                            height={32}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
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
                />
            </div>
        </div>
    );
};

export default SearchBar;
