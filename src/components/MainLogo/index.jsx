/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

// eslint-disable-next-line react/prop-types
const MainLogo = ({ props }) => {
    return (
        <svg
            width={364}
            height={150}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            {...props}
        >
            <path fill="url(#prefix__pattern0)" d="M0 0h364v150H0z" />
            <defs>
                <pattern
                    id="prefix__pattern0"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <use
                        xlinkHref="#prefix__image0_463:1371"
                        transform="matrix(.00138 0 0 .00336 0 0)"
                    />
                </pattern>
                <image
                    id="prefix__image0_463:1371"
                    width={724}
                    height={298}
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    );
};

export default MainLogo;
