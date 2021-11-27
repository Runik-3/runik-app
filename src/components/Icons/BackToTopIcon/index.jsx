import React from 'react';

// eslint-disable-next-line react/prop-types
export default function BackToTopIcon({ onclick }) {
    return (
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="prefix__feather prefix__feather-arrow-up-circle"
                onClick={() => onclick()}
            >
                <circle cx={12} cy={12} r={10} />
                <path d="M16 12l-4-4-4 4M12 16V8" />
            </svg>
        </div>
    );
}
