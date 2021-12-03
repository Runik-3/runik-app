/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import LibraryOpenIcon from '../Icons/LibraryOpenIcon';
import Divider from '../Icons/Divider';
import { LibraryContext } from '../../context/libraryContext';
import LibraryCard from '../LibraryCard';
import useDictionaryStates from '../../hooks/useDictionaryStates';
import handleLibraryRefs from '../../services/handleLibraryRefs';
import installDictionaries from '../../services/installDictionary';
import convertDictionary from '../../services/convertDictionary';
import InstallModal from '../InstallModal';
import { findDict } from '../../services/databaseController';
import { getS3Url } from '../../services/s3Service';

export default function HeadlessSlideOver({ open, setOpen }) {
    const [library] = useContext(LibraryContext);
    const [targetDevice, setTargetDevice] = useState('kobo');
    const [modalActive, setModalActive] = useState(false);
    const [isThinking, setIsThinking] = useState(true);
    const [error, setError] = useState('');
    // 6 states necessary for dictionary generation and conversion
    const states = useDictionaryStates();

    // eslint-disable-next-line no-unused-vars
    async function checkLibraryAgainstDb(name, targetFormat, lang) {
        const response = await findDict(name, targetFormat, lang).catch(
            (err) => {
                throw new Error(err);
            }
        );
        const { data } = await response.json();
        console.log(data[0].dictionaries); // data array

        console.log(await getS3Url());
    }
    // DICTIONARY LOGIC
    // IN dict refs OUT xdxf words
    async function handleGetDict() {
        if (library.length > 0) {
            setModalActive(true);
            setIsThinking(true);
            states.setStatus(
                library.length === 1
                    ? `Generating words list for ${library.length} dictionary...`
                    : `Generating words list for ${library.length} dictionaries...`
            );
            const rawDicts = await handleLibraryRefs(library).catch((err) => {
                setError('There was an issue generating a words list');
                throw new Error(err);
            });

            states.setStatus('Words list generated');
            states.setDicts(rawDicts);
        }
    }

    async function handleInstall() {
        if ('showOpenFilePicker' in window) {
            await installDictionaries(states.convertedDicts).catch((err) => {
                throw new Error(err);
            });
            states.setStatus('Dictionaries installed!');
        } else {
            setError(
                'This feature is not supported on your browser, please use a chromium-based browser.'
            );
        }
    }

    useEffect(async () => {
        if (states.dicts && states.dicts.length > 0) {
            let converted = [];
            states.setStatus('Converting dictionaries...');
            for (let i = 0; i < states.dicts.length; i++) {
                const dict = states.dicts[i];
                const convertedDict = convertDictionary(
                    dict,
                    targetDevice,
                    dict.name
                );

                converted.push(convertedDict);
            }
            converted = await Promise.all(converted).catch((err) => {
                throw new Error(err);
            });

            // loop through converted dicts to find error key
            converted.forEach((dict) => {
                if (dict.error) {
                    setError(dict.error);
                }
            });
            states.setConvertedDicts(converted);
            setIsThinking(false);
            states.setStatus(
                'Dictionaries converted and ready to be installed!'
            );
        }
        return () => {
            states.setDicts(...states.dicts);
        };
    }, [states.dicts]);

    // when modal flow is cancelled, set everything back to default state
    useEffect(() => {
        if (modalActive === false) {
            states.setStatus('');
            setIsThinking(false);
            states.setDicts([]);
            states.setConvertedDicts([]);
            setError(false);
        }
    }, [modalActive]);

    return (
        <div>
            {modalActive ? (
                <InstallModal
                    handleInstall={() => handleInstall()}
                    setModalActive={() => setModalActive(false)}
                    status={states.status}
                    error={error}
                    isThinking={isThinking}
                />
            ) : (
                ''
            )}
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    static
                    className="fixed inset-0 overflow-hidden"
                    open={open}
                    onClose={setOpen}
                >
                    <div className="absolute inset-0 overflow-hidden">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-in-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in-out duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="absolute inset-0 transition-opacity" />
                        </Transition.Child>
                        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-200 sm:duration-200"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-200 sm:duration-200"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <div className="relative w-screen max-w-sm">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-200"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-200"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-library-icon-top z-30 left-library-icon-right transform translate-x-20">
                                            <button
                                                id="close"
                                                onClick={() => setOpen(false)}
                                            >
                                                <span className="sr-only">
                                                    Close panel
                                                </span>
                                                <LibraryOpenIcon />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div
                                        id="library"
                                        className="h-full flex flex-col top-0 right-0 z-20 absolute w-full justify-center items-center bg-gradient-to-t from-runik-library-dark to-runik-library-light pt-library-children overflow-y-scroll shadow-xl"
                                    >
                                        <Divider />
                                        <div className="w-library-children-width mt-4 text-3xl text-runik-neutral-med">
                                            <h1>Library</h1>
                                        </div>
                                        <div className="mt-6 relative flex-1">
                                            {library.map((libRef) => {
                                                return (
                                                    <LibraryCard
                                                        key={libRef[0].url}
                                                        libRef={libRef[0]}
                                                    />
                                                );
                                            })}
                                        </div>
                                        <Divider />
                                        <div className="flex flex-col w-library-children-width mt-4 text-2xl text-runik-neutral-med">
                                            <div className="flex-col items-center w-4/5 mx-auto mt-6 font-spartan font-semibold text-lg text-runik-neutral-dark mb-12">
                                                {/* <button
                                                    type="button"
                                                    onClick={() =>
                                                        checkLibraryAgainstDb()
                                                    }
                                                >
                                                    de
                                                </button> */}
                                                <div className="w-5/5 mt-6 text-center px-14 py-4 border-2 border-runik-neutral-dark rounded-xl text-lg font-spartan font-semibold transition-all hover:scale-105 hover:shadow-lg hover:bg-runik-primary-med hover:border-runik-primary-med cursor-pointer">
                                                    <input
                                                        type="button"
                                                        value="Install"
                                                        className="font-semibold cursor-pointer bg-transparent"
                                                        onClick={() => {
                                                            handleGetDict();
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    );
}
