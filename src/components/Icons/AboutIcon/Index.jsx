/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

function AboutIcon(props) {
    return (
        <svg
            width={60}
            height={60}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M30 57.5c15.188 0 27.5-12.312 27.5-27.5S45.188 2.5 30 2.5 2.5 14.812 2.5 30 14.812 57.5 30 57.5zM30 43.2V25.6M30 18.267h.027"
                stroke="#000"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default AboutIcon;
