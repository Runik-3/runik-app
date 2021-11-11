/* eslint-disable no-undef */
// eslint-disable-next-line react/prop-types
const SearchBar = ({ visibility }) => {
    return (
        <div
            /* Work in progress */
            className={`w-2/3 mx-auto max-w-5xl flex border-b-2 border-l-0 border-r-0 border-t-0 border-runik-neutral-dark ${
                visibility === 'hidden'
            }`}
        >
            {/* Work in progress prop ^ */}
            <input
                type="text"
                placeholder="Search"
                className="w-full h-12 text-xl font-spartan text-gray-500 focus:ring-0 focus:border-gray-700 border-0"
            />
            <button
                type="submit"
                className=" scale-75 transform -translate-y-1"
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
        </div>
    );
};

export default SearchBar;
