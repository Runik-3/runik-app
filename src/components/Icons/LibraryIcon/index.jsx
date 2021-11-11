/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

// eslint-disable-next-line react/prop-types
const LibraryIcon = ({ props /* ,onLibraryIconCLick */ }) => {
    return (
        <div className="hover:opacity-60 transition-ease-in-out duration-500 ">
            <svg
                width={48}
                height={48}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    d="M8 39a5 5 0 015-5h27"
                    stroke="#000"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M13 4h27v40H13a5 5 0 01-5-5V9a5 5 0 015-5v0z"
                    stroke="#000"
                    strokeWidth={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
};

export default LibraryIcon;
