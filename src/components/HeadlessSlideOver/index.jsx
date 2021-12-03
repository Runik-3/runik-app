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
    addS3RefsToDb,
} from '../../services/databaseController';
import {
    getS3UploadUrl,
    pullDictsFromS3,
    uploadCollectionToS3,
} from '../../services/s3Service';
import getTitleFromUrl from '../../services/getTitleFromUrl';

export default function HeadlessSlideOver({ open, setOpen }) {
    const [library] = useContext(LibraryContext);
    const [targetFormat, setTargetFormat] = useState('kobo');
    const [modalStep, setModalStep] = useState();
    const [isThinking, setIsThinking] = useState(true);
    const [error, setError] = useState('');
    // 6 states necessary for dictionary generation and conversion
    const states = useDictionaryStates();

    // eslint-disable-next-line no-unused-vars

    // DICTIONARY LOGIC
    // IN dict refs OUT xdxf words
    async function handleGetDict() {
        setModalStep('dbcheck');
        states.setStatus('Checking for dictionaries in database...');
        setIsThinking(true);

        const inDb = await libraryDictsInDb(library, targetFormat);
        checkLibraryAgainstDb(library, inDb); // appends s3Url to libref of existing db ojects

        if (library.length > 0) {
            setModalStep('generating');
            states.setStatus(
                library.length === 1
                    ? `Generating words list for ${library.length} dictionary...`
                    : `Generating words list for ${library.length} dictionaries...`
            );
            const rawDicts = await handleLibraryRefs(library).catch((err) => {
                setError('There was an issue generating a words list');
                throw new Error(err);
            });

            if (rawDicts) {
                states.setInDb(true);
            }
            states.setStatus('Words list generated');
            states.setDicts(rawDicts);
        }
    }

    async function handleInstall() {
        const dbDicts = await pullDictsFromS3(library, targetFormat);
        let { convertedDicts } = states;
        convertedDicts = convertedDicts.concat(dbDicts);
        await installDictionaries(convertedDicts).catch((err) => {
            throw new Error(err);
        });
        setModalStep('installed');
        states.setStatus('Dictionaries installed!');
    }

    async function handleDownload(dbUploadArr) {
        if (targetFormat !== 'xdxf') {
            const downloads = [];
            if (dbUploadArr) {
                dbUploadArr.forEach((upload) => {
                    downloads.push({
                        name: upload.file.name,
                        url: upload.publicUrl,
                    });
                });
            }
            if (library.length > 0) {
                library.forEach((libRef) => {
                    if (libRef[0].s3Url) {
                        downloads.push({
                            name: getTitleFromUrl(libRef[0].url),
                            url: libRef[0].s3Url,
                        });
                    }
                });
            }
            states.setDownloads(downloads);
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
                    targetFormat,
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
            // add dicts not already in db to s3 -- returns public s3 links for db add
            const dbUploadArr = await uploadCollectionToS3(
                converted,
                library,
                targetFormat
            );
            // add dict file to db using public s3url
            await addS3RefsToDb(dbUploadArr);

            states.setConvertedDicts(converted);
            setIsThinking(false);
            if (states.installFlow) {
                setModalStep('install');
            } else {
                await handleDownload(dbUploadArr);
                setModalStep('download');
            }
            if (states.installFlow) {
                states.setStatus(
                    'Dictionaries converted and ready to be installed! Make sure your e-reader is connected to your computer.'
                );
            } else {
                states.setStatus(
                    'Dictionaries converted and ready to be downloaded'
                );
            }
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

    useEffect(() => {
        if (states.inDb && states.installFlow) {
            setModalStep('install');
            states.setStatus(
                'Dictionaries found in database! Make sure your e-reader is connected to your computer'
            );
        } else if (states.inDb && !states.installFlow) {
            handleDownload();
            states.setStatus('Dictionaries found in database!');
            setModalStep('download');
        }
    }, [states.inDb]);

    // USER FLOW
    function triggerModalStart() {
        setModalStep('options');
    }

    async function handleDeviceInstall(device) {
        states.setInstallFlow(true);
        setTargetFormat(device);
        if ('showOpenFilePicker' in window) {
            await handleGetDict();
        } else {
            setError(
                'This feature is not supported on your browser, please use a chromium-based browser.'
            );
        }
    }

    async function handleFileDownload(format) {
        states.setInstallFlow(false);
        setTargetFormat(format);
        await handleGetDict();
    }

    return (
        <div>
            {modalStep ? (
                <InstallModal
                    installFlow={states.installFlow}
                    handleFileDownload={handleFileDownload}
                    downloads={states.downloads}
                    handleInstall={() => handleInstall()}
                    setModalStep={() => setModalStep(null)}
                    modalStep={modalStep}
                    handleDeviceInstall={handleDeviceInstall}
                    setTargetFormat={setTargetFormat}
                    targetFormat={targetFormat}
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
                                        <button
                                            type="button"
                                            onClick={() =>
                                                pullDictsFromS3(
                                                    library,
                                                    targetFormat
                                                )
                                            }
                                        >
                                            text
                                        </button>
                                        <div className="flex flex-col w-library-children-width mt-4 text-2xl text-runik-neutral-med">
                                            <h2>Select Your Device</h2>
                                            <div className="flex-col items-center w-4/5 mx-auto mt-6 font-spartan font-semibold text-lg text-runik-neutral-dark mb-12">
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
