/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { LibraryContext } from '../../context/libraryContext';
import MinusCircle from '../Icons/MinusCircle';

// eslint-disable-next-line react/prop-types
const LibraryCard = ({ libRef }) => {
    const [, , removeReference] = useContext(LibraryContext);
    function removeCard(url) {
        removeReference(url);
    }

    return (
        <div className="transition-all">
            <div className="overflow-hidden flex p-3 pb-8 pt-2 shadow-lg rounded-lg w-80 h-20 bg-gradient-to-r from-runik-neutral-dark to-black justify-between mb-2">
                <div className="text-lg text-left align-text-top text-white font-bold font-spartan ">
                    {libRef.title}
                </div>
                <MinusCircle onclick={() => removeCard()} />
                {/* <img
                    className="absolute transform w-full -translate-y-4"
                    src={libRef.thumbnail}
                    alt="dictionaryImage"
                /> */}
            </div>
        </div>
    );
};

export default LibraryCard;
