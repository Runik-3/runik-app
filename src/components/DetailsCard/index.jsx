import React from 'react';
import Button from '../Button/index';

// eslint-disable-next-line react/prop-types
const DetailsCard = ({ img, headerTitle, description }) => {
    return (
        // direction-row
        <div className="flex text-runik-neutral-dark h-full ">
            <div className="overflow-hidden flex shadow-lg rounded-xl w-80 h-full mr-4">
                <img
                    src={img}
                    alt="Placeholder"
                    className="min-w-full rounded-xl"
                />
            </div>
            <div className="flex flex-col font-spartan w-5/12">
                <h3 className="pb-3 text-4xl">{headerTitle}</h3>
                <p className="">{description}</p>
                <div className="flex w-full h-full justify-end items-end">
                    <div>
                        <Button text="Add to Library" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;
