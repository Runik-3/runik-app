/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useEffect, useState } from 'react';
import { LibraryContext } from '../../../context/libraryContext';

// eslint-disable-next-line react/prop-types
function LibraryIcon({ children, className, ...props }) {
    const [library] = useContext(LibraryContext);
    const [bouncy, setBouncy] = useState(false);

    useEffect(() => {
        if (library.length > 0) {
            setBouncy(true);
            setTimeout(() => {
                setBouncy(false);
            }, 2500);
        }
    }, [library]);

    return (
        <button className="flex" type="button" {...props}>
            <svg
                width={32}
                height={32}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    d="M5.333 26a3.333 3.333 0 013.334-3.334h18"
                    stroke="#000"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M8.667 2.667h18v26.666h-18A3.333 3.333 0 015.333 26V6a3.333 3.333 0 013.334-3.333v0z"
                    stroke="#000"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <div
                className={`${library.length === 0 ? 'hidden' : ''} ${
                    bouncy ? 'animate-bounce' : ''
                } absolute justify-center transform`}
            >
                <div className="bg-black rounded-full w-6 text-base text-white">
                    {library.length}
                </div>
            </div>
        </button>
    );
}

export default LibraryIcon;
