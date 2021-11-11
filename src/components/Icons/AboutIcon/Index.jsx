/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

// eslint-disable-next-line react/prop-types
const AboutIcon = ({ props }) => {
    return (
        <svg
            width={48}
            height={48}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20zM24 33.6V20.8M24 15.467h.02"
                stroke="#000"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default AboutIcon;
