/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

// eslint-disable-next-line react/prop-types
const ArrowBackIcon = ({ props }) => {
    return (
        <div className="hover:opacity-60 transition-ease-in-out duration-500 ">
            <svg
                width={54}
                height={38}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    d="M51 21.5a2.5 2.5 0 000-5v5zM1.232 17.232a2.5 2.5 0 000 3.536l15.91 15.91a2.5 2.5 0 003.536-3.536L6.536 19 20.678 4.858a2.5 2.5 0 10-3.536-3.536l-15.91 15.91zM51 16.5H3v5h48v-5z"
                    fill="#414141"
                />
            </svg>
        </div>
    );
};

export default ArrowBackIcon;
