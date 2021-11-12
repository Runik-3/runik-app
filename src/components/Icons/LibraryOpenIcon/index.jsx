/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

function LibraryOpenIcon(props) {
    return (
        <svg
            width="66"
            height="66"
            viewBox="0 0 66 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M5.5 8.25H22C24.9174 8.25 27.7153 9.40892 29.7782 11.4718C31.8411 13.5347 33 16.3326 33 19.25V57.75C33 55.562 32.1308 53.4635 30.5836 51.9164C29.0365 50.3692 26.938 49.5 24.75 49.5H5.5V8.25Z"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M60.5 8.25H44C41.0826 8.25 38.2847 9.40892 36.2218 11.4718C34.1589 13.5347 33 16.3326 33 19.25V57.75C33 55.562 33.8692 53.4635 35.4164 51.9164C36.9635 50.3692 39.062 49.5 41.25 49.5H60.5V8.25Z"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default LibraryOpenIcon;
