import * as React from 'react';

export default function PlusCircle() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="prefix__feather prefix__feather-plus-circle"
        >
            <circle cx={12} cy={12} r={10} />
            <path d="M12 8v8M8 12h8" />
        </svg>
    );
}
