/* eslint-disable react/no-array-index-key */
/* eslint-disable no-param-reassign */
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

    function handleChange(e) {
        libRef.convertLang = e.currentTarget.value;
    }

    return (
        <div className="transition-all">
            <div className="overflow-hidden flex flex-col p-3 pb-8 pt-2 shadow-lg rounded-lg w-80 h-20 bg-gradient-to-r from-runik-neutral-dark to-black justify-between mb-2">
                {' '}
                <div className="flex justify-between w-full">
                    <div className="text-lg text-left align-text-top text-white font-bold font-spartan ">
                        {libRef.title}
                    </div>
                    <MinusCircle onclick={() => removeCard(libRef.url)} />
                </div>
                <div className="">
                    {libRef.languages.length !== 0 ? (
                        <select
                            onClick={(e) => handleChange(e)}
                            className="mt-1 bg-transparent text-white font-bold pr-8 border-1 border-white rounded-md p-0.5 pl-1"
                            name="languages"
                            id="languages"
                        >
                            <option
                                defaultValue
                                value="en"
                                className="bg-black text-white font-bold"
                            >
                                english
                            </option>
                            {libRef.languages.map((lang, i) => {
                                return (
                                    <option
                                        key={lang.lang + i}
                                        className="bg-black text-white font-bold"
                                        value={lang.lang}
                                    >
                                        {lang.autonym}
                                    </option>
                                );
                            })}
                        </select>
                    ) : (
                        <p className="mt-1 text-gray-400 font-bold w-min border-1 border-gray-400 rounded-md py-0.5 px-1.5">
                            english
                        </p>
                    )}
                </div>
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
