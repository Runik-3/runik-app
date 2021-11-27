/* eslint-disable react/prop-types */
import React from 'react';

export default function PlusCircleLarge({ url, onclick }) {
    return (
        <svg
            width={32}
            height={32}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="prefix__feather prefix__feather-plus-circle cursor-pointer hover:scale-110 transition-all"
            onClick={() => onclick(url)}
        >
            <circle
                cx={16}
                cy={16}
                r={15}
                fill="url(#prefix__paint0_linear_1250_1077)"
                fillOpacity={0.7}
                stroke="#F6F6F6"
                strokeWidth={2}
            />
            <path
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                d="M16 9v14M23 16H9"
            />
            <defs>
                <linearGradient
                    id="prefix__paint0_linear_1250_1077"
                    x1={28}
                    y1={2.939}
                    x2={6.51}
                    y2={27.868}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#C4C4C4" />
                    <stop offset={1} stopColor="#fff" stopOpacity={0.27} />
                </linearGradient>
            </defs>
        </svg>
    );
}
