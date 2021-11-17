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
