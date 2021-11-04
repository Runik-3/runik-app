/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

// eslint-disable-next-line react/prop-types
const ArrowBackIcon = ({ props }) => {
    return (
        <svg
            width={49}
            height={38}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M46 21.5a2.5 2.5 0 000-5v5zM1.232 17.232a2.5 2.5 0 000 3.536l15.91 15.91a2.5 2.5 0 003.536-3.536L6.536 19 20.678 4.858a2.5 2.5 0 10-3.536-3.536l-15.91 15.91zM46 16.5H3v5h43v-5z"
                fill="#414141"
            />
        </svg>
    );
};

export default ArrowBackIcon;
