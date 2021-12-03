/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, useEffect, useState } from 'react';
import { LibraryContext } from '../../../context/libraryContext';

// eslint-disable-next-line react/prop-types
function LibraryIcon({ children, className }) {
    const [mounted, setMounted] = useState(false);
    const [library] = useContext(LibraryContext);
    const [bouncy, setBouncy] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (library.length > 0) {
            setBouncy(true);
            setTimeout(() => {
                setBouncy(false);
            }, 2500);
        }
    }, [library]);

    return (
        mounted && (
            <div className="flex p-3 hover:opacity-60 cursor-pointer transition-ease-in-out duration-500">
                <svg
                    width={32}
                    height={32}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
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
                    } absolute top-1 right-6 justify-center transform`}
                >
                    <div className="bg-[#D39D33] rounded-full w-6 text-base text-white">
                        {library.length}
                    </div>
                </div>
            </div>
        )
    );
}

export default LibraryIcon;
