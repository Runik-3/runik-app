/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
// eslint-disable-next-line react/prop-types
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
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
const SearchBar = ({
    visibility,
    SearchHeight,
    resultsSearch,
    filterSearch,
}) => {
    const searchRef = useRef(null);
    // eslint-disable-next-line no-unused-vars
    const [focused, setFocused] = useState(false);
    const handleFocus = () => setFocused(true);
    const handleBlur = () => setFocused(false);

    // eslint-disable-next-line no-unused-vars
    const handleKeyDown = (e) => {
        // if (e.key === 'Enter' && focused) {
        //     searchRef.current.click();
        // }
    };

    const [searchString, setSearchString] = useState('');
    const [liveResults, setLiveResults] = useState([]);

    function handleSearchInput(e) {
        setSearchString(e.target.value);

        if (resultsSearch && searchString) {
            searchRef.current.click();
            filterSearch(searchString);
        }
    }

    function filter(string) {
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
            filter(searchString);
        }
    }, [searchString]);

    return (
        <div id="navigation" className="w-full h-search-bar-height">
            <div
                className={` w-full sm:w-4/6 mt-2 mx-auto min-w-max border border-[#BABABA] rounded-lg ${
                    visibility ? 'hidden' : 'flex'
                } bg-runik-neutral-light`}
            >
                <input
                    type="text"
                    placeholder="Search..."
                    className={`w-11/12 ${SearchHeight} border-0 rounded-lg text-base sm:text-xl font-spartan bg-runik-neutral-light text-gray-700 focus:ring-0 focus:border-gray-700`}
                    onChange={(e) => handleSearchInput(e)}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                />
                <Link
                    href={{
                        pathname: '/results',
                        query: { query: searchString },
                    }}
                >
                    <button
                        ref={searchRef}
                        type="submit"
                        className="scale-75 transform hover:opacity-60 cursor-pointer transition-ease-in-out duration-500 pb-2 pr-4 pt-2"
                    >
                        <svg
                            width={32}
                            height={32}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full"
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
                {!resultsSearch && (
                    <SearchBarDropdown
                        barVisibility={visibility}
                        dropdownVisibility={searchString ? 'block' : 'hidden'}
                        liveResults={liveResults}
                        search={searchString}
                    />
                )}
            </div>
        </div>
    );
};

export default SearchBar;
