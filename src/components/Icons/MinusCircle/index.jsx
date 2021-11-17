/* eslint-disable react/prop-types */
import * as React from 'react';

export default function MinusCircle({ onclick }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="prefix__feather prefix__feather-minus-circle hover:scale-110 transition-all cursor-pointer"
            onClick={onclick}
        >
            <circle cx={12} cy={12} r={10} />
            <path d="M8 12h8" />
        </svg>
    );
}
