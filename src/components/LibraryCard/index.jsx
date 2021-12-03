/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
import { Fragment, useState, useContext, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

import flags from '../../data/flags';
import MinusCircle from '../Icons/MinusCircle';
import { LibraryContext } from '../../context/libraryContext';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const LanguageOption = ({ language }) => {
    const flag = flags[language];

    if (flag) {
        return flag.icon();
    }
    return <>{}</>;
};

// eslint-disable-next-line react/prop-types
const LibraryCard = ({ libRef }) => {
    const defaultLanguage = {
        lang: 'en',
        autonym: 'English',
    };

    const [selected, setSelected] = useState(defaultLanguage);
    const [, , removeReference] = useContext(LibraryContext);

    function removeCard(url) {
        removeReference(url);
    }

    useEffect(() => {
        libRef.convertLang = selected.lang;
    }, [selected]);

    // function handleChange(e) {
    //     libRef.convertLang = e.currentTarget.value;
    // }

    return (
        <>
            <div className="transition-all w-full">
                <div className=" flex flex-col p-3 pb-6 pt-2 shadow-lg rounded-lg h-30 bg-gradient-to-r from-runik-neutral-dark to-black justify-between mb-2">
                    {' '}
                    <div className="flex justify-between w-full">
                        <div className="text-lg text-left align-text-top text-white font-bold font-spartan ">
                            {libRef.title}
                        </div>
                        <MinusCircle onclick={() => removeCard(libRef.url)} />
                    </div>
                    <Listbox
                        as="div"
                        value={selected}
                        onChange={setSelected}
                        className="pt-2"
                        disabled={libRef.languages.length === 0}
                    >
                        {({ open }) => (
                            <>
                                {/* <Listbox.Label className="block text-sm font-medium text-runik-library-light">
                                Dictionary Language
                            </Listbox.Label> */}
                                <div className="mt-1 relative">
                                    <Listbox.Button
                                        className={`relative w-full ${
                                            libRef.languages.length === 0
                                                ? 'bg-runik-neutral-gray'
                                                : 'bg-runik-library-light'
                                        } border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none  sm:text-sm`}
                                    >
                                        <span className="flex items-center">
                                            <LanguageOption
                                                language={selected.lang}
                                                className="flex-shrink-0"
                                            />
                                            <span className="ml-3 block truncate">
                                                {selected.autonym}
                                            </span>
                                        </span>
                                        <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                            <SelectorIcon
                                                className="h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </Listbox.Button>

                                    {libRef.languages.length !== 0 ? (
                                        <>
                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md  text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                                    {[
                                                        defaultLanguage,
                                                        ...libRef.languages,
                                                    ].map((language) => (
                                                        <Listbox.Option
                                                            key={language.lang}
                                                            className={({
                                                                active,
                                                            }) =>
                                                                classNames(
                                                                    active
                                                                        ? 'text-white bg-runik-neutral-med'
                                                                        : 'text-gray-900',
                                                                    'cursor-default select-none relative py-2 pl-3 pr-9'
                                                                )
                                                            }
                                                            value={language}
                                                        >
                                                            {({
                                                                selected,
                                                                active,
                                                            }) => (
                                                                <>
                                                                    <div className="flex items-center">
                                                                        <LanguageOption
                                                                            language={
                                                                                language.lang
                                                                            }
                                                                            className="flex-shrink-0"
                                                                        />
                                                                        <span
                                                                            className={classNames(
                                                                                selected
                                                                                    ? 'font-semibold'
                                                                                    : 'font-normal',
                                                                                'ml-3 block truncate'
                                                                            )}
                                                                        >
                                                                            {
                                                                                language.autonym
                                                                            }
                                                                        </span>
                                                                    </div>

                                                                    {selected ? (
                                                                        <span
                                                                            className={classNames(
                                                                                active
                                                                                    ? 'text-white'
                                                                                    : 'text-runik-primary-dark',
                                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                            )}
                                                                        >
                                                                            <CheckIcon
                                                                                className="h-5 w-5"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </>
                        )}
                    </Listbox>
                </div>
            </div>
        </>
    );
};

export default LibraryCard;
