/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

function LibraryOpenIcon(props) {
    return (
        <div className="hover:opacity-60 cursor-pointer transition-ease-in-out duration-500">
            <svg
                width={32}
                height={32}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    d="M2.667 4h8A5.333 5.333 0 0116 9.333V28a4 4 0 00-4-4H2.667V4zM29.333 4h-8A5.333 5.333 0 0016 9.333V28a4 4 0 014-4h9.333V4z"
                    stroke="#000"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
}

export default LibraryOpenIcon;
