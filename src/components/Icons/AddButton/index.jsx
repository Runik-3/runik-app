/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

// eslint-disable-next-line react/prop-types
export default function AddButton({ url, onclick }) {
    return (
        <svg
            width={40}
            height={40}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => onclick(url)}
        >
            <circle cx={20} cy={20} r={18.5} stroke="#F6F6F6" strokeWidth={3} />
            <path
                stroke="#F6F6F6"
                strokeWidth={2}
                d="M20.612 9v22.041M31.041 20.612H9"
            />
        </svg>
    );
}
