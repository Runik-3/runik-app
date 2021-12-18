/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Link from 'next/link';

// eslint-disable-next-line react/prop-types
const AboutIcon = ({ aDisplay }) => {
    return (
        <Link href="about">
            <div
                className={`cursor-pointer hover:opacity-60 transition-ease-in-out duration-500 p-3 ${aDisplay}`}
            >
                <svg
                    width={32}
                    height={32}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M16 29.333c7.364 0 13.333-5.97 13.333-13.333 0-7.364-5.97-13.334-13.333-13.334C8.636 2.666 2.667 8.636 2.667 16S8.637 29.333 16 29.333zM16 21.333V16M16 10.666h.013"
                        stroke="#000"
                        strokeWidth={2.667}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </Link>
    );
};

export default AboutIcon;
