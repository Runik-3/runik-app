/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

// eslint-disable-next-line react/prop-types
function LibraryIcon({ children, className, ...props }) {
    return (
        <button
            type="button"
            className="bg-indigo-50 px-6 py-2 rounded-md text-indigo-500 hover:bg-indigo-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            {...props}
        >
            <svg
                width={66}
                height={66}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    d="M11 53.625a6.875 6.875 0 016.875-6.875H55"
                    stroke="#000"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M17.875 5.5H55v55H17.875A6.875 6.875 0 0111 53.625v-41.25A6.875 6.875 0 0117.875 5.5v0z"
                    stroke="#000"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
}

export default LibraryIcon;
