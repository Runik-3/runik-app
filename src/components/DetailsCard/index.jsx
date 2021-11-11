import React from 'react';

// eslint-disable-next-line react/prop-types
const DetailsCard = ({ img, headerTitle, description }) => {
    return (
        // direction-row
        <div className="flex flex-row p-4 pl-0 min-w-max max-w-lg sm:min-h-0 h-96 bg-white text-runik-neutral-dark">
            <div className="flex rounded-xl mr-6 w-64">
                <img
                    src={img}
                    alt="Placeholder"
                    className="max-w-full rounded-xl"
                />
            </div>
            {/* direction-column */}
            <div className="flex flex-col justify-between sm:min-w-0 max-w-2xl sm:min-h-0 h-full bg-white">
                {/* direction-column */}
                <div className="flex flex-col bg-white font-spartan">
                    <h3 className="pb-3 text-4xl">{headerTitle}</h3>
                    <p className="">{description}</p>
                </div>
                <div className="flex flex-row-reverse">
                    <button
                        className="w-80 h-16 bg-white border-black border-2 rounded-xl font-spartan font-semibold"
                        type="submit"
                    >
                        Add to Library
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;
