/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-vars */
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
import {
    findDict,
    libraryDictsInDb,
    checkLibraryAgainstDb,
} from '../../services/databaseController';
import { getS3UploadUrl, uploadCollectionToS3 } from '../../services/s3Service';

export default function HeadlessSlideOver({ open, setOpen }) {
    const [library] = useContext(LibraryContext);
    const [targetDevice, setTargetDevice] = useState('kobo');
    const [modalStep, setModalStep] = useState();
    const [isThinking, setIsThinking] = useState(true);
    const [error, setError] = useState('');
    // 6 states necessary for dictionary generation and conversion
    const states = useDictionaryStates();

    // eslint-disable-next-line no-unused-vars

    // DICTIONARY LOGIC
    // IN dict refs OUT xdxf words
    async function handleGetDict() {
        const inDb = await libraryDictsInDb(library, targetDevice);
        checkLibraryAgainstDb(library, inDb); // appends s3Url to libref of existing db ojects

        if (library.length > 0) {
            setModalStep('generating');
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
        await installDictionaries(states.convertedDicts).catch((err) => {
            throw new Error(err);
        });
        states.setStatus('Dictionaries installed!');
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

            console.log(converted);
            // add dicts not already in db to db
            uploadCollectionToS3(converted, library);

            states.setConvertedDicts(converted);
            setIsThinking(false);
            setModalStep('install');
            states.setStatus(
                'Dictionaries converted and ready to be installed! Make sure your e-reader is connected to your computer.'
            );
        }
        return () => {
            states.setDicts(...states.dicts);
        };
    }, [states.dicts]);

    // when modal flow is cancelled, set everything back to default state
    useEffect(() => {
        if (!modalStep) {
            states.setStatus('');
            setIsThinking(false);
            states.setDicts([]);
            states.setConvertedDicts([]);
            setError(false);
        }
    }, [modalStep]);
    useEffect(() => {
        if (error) {
            setModalStep('error');
        }
    }, [error]);

    // USER FLOW
    function triggerModalStart() {
        setModalStep('options');
    }

    async function handleDeviceInstall(device) {
        setTargetDevice(device);
        if ('showOpenFilePicker' in window) {
            await handleGetDict();
        } else {
            setError(
                'This feature is not supported on your browser, please use a chromium-based browser.'
            );
        }
    }

    function handleFileDownload(format) {}

    return (
        <div>
            {modalStep ? (
                <InstallModal
                    handleInstall={() => handleInstall()}
                    setModalStep={() => setModalStep(null)}
                    modalStep={modalStep}
                    handleDeviceInstall={handleDeviceInstall}
                    setTargetDevice={setTargetDevice}
                    targetDevice={targetDevice}
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
                                        <div className="absolute top-library-icon-top left-library-icon-right transform translate-x-10">
                                            <button
                                                onClick={() => setOpen(false)}
                                            >
                                                <span className="sr-only">
                                                    Close panel
                                                </span>
                                                <LibraryOpenIcon />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="h-full flex flex-col justify-center items-center bg-gradient-to-t from-runik-library-dark to-runik-library-light pt-library-children overflow-y-scroll">
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
                                            <h2>Select Your Device</h2>
                                            <div className="flex-col items-center w-4/5 mx-auto mt-6 font-spartan font-semibold text-lg text-runik-neutral-dark mb-12">
                                                {/* <div className="w-full flex">
                                                    <div
                                                        tabIndex="0"
                                                        className={
                                                            targetDevice ===
                                                            'kobo'
                                                                ? 'kobo w-2/4 bg-runik-neutral-dark text-white py-2 px-6 rounded-l-xl cursor-pointer border-2 border-runik-neutral-dark'
                                                                : 'kindle w-2/4 py-2 px-6 cursor-pointer border-2 border-runik-neutral-dark rounded-l-xl'
                                                        }
                                                        onClick={() =>
                                                            setTargetDevice(
                                                                'kobo'
                                                            )
                                                        }
                                                    >
                                                        Kobo
                                                    </div>
                                                    <div
                                                        tabIndex="0"
                                                        className={
                                                            targetDevice ===
                                                            'kindle'
                                                                ? 'kindle w-2/4 py-2 px-6 cursor-pointer border-2 border-runik-neutral-dark rounded-r-xl bg-runik-neutral-dark text-white'
                                                                : 'kindle w-2/4 py-2 px-6 cursor-pointer border-2 border-runik-neutral-dark rounded-r-xl'
                                                        }
                                                        onClick={() =>
                                                            setTargetDevice(
                                                                'kindle'
                                                            )
                                                        }
                                                    >
                                                        Kindle
                                                    </div>
                                                </div> */}

                                                <div className="w-5/5 mt-6 text-xl text-center m-auto p-auto outline-dark py-2 rounded cursor-pointer">
                                                    <input
                                                        type="button"
                                                        value="Install"
                                                        className="font-semibold cursor-pointer bg-transparent w-full h-full"
                                                        onClick={() => {
                                                            triggerModalStart();
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
