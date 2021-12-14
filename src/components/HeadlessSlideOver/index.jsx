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
// import { XCircleIcon } from '@heroicons/react/outline';
import LibraryOpenIcon from '../Icons/LibraryOpenIcon';
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
} from '../../services/s3Controller';
import getTitleFromUrl from '../../services/getTitleFromUrl';

export default function HeadlessSlideOver({ open, setOpen }) {
    const [library, , , removeAllReferences] = useContext(LibraryContext);
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
            states.setStatus('Words list generated.');
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
            setModalStep('converting');
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
            // double if statements fix this
            if (states.installFlow) {
                // setModalStep('install');
            } else {
                await handleDownload(dbUploadArr);
                setModalStep('download');
            }
            if (states.installFlow) {
                states.setStatus(
                    'Dictionaries converted and ready to be installed! Make sure your e-reader is connected to your computer.'
                );
                setModalStep('install');
            } else {
                states.setStatus('Dictionaries converted.');
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
                'Dictionaries found in database! Make sure your e-reader is connected to your computer.'
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
                    className="fixed inset-0 overflow-hidden"
                    onClose={setOpen}
                >
                    <div className="absolute inset-0 overflow-hidden">
                        <Dialog.Overlay className="absolute inset-0" />

                        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-200"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-200"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <div className="w-screen max-w-sm">
                                    <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                                        <div className="flex flex-col min-h-screen w-full">
                                            <div className="p-4">
                                                <div className="flex items-start justify-between">
                                                    <Dialog.Title className="mt-4 text-3xl font-spartan text-runik-neutral-med">
                                                        <h1>Library</h1>
                                                    </Dialog.Title>
                                                    <div className="ml-3 h-7 flex items-center">
                                                        <button
                                                            type="button"
                                                            className="bg-white rounded-md text-runik-neutral-gray hover:text-runik-neutral-med transition duration-300 ease-in-out"
                                                            onClick={() =>
                                                                setOpen(false)
                                                            }
                                                        >
                                                            <span className="sr-only">
                                                                Close panel
                                                            </span>
                                                            <LibraryOpenIcon />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className={`dictionaries flex-1  ${
                                                    library.length === 0
                                                        ? 'flex justify-center items-center'
                                                        : ''
                                                }`}
                                            >
                                                {library.length === 0 ? (
                                                    <div className="text-runik-neutral-med text-md text-center">
                                                        <p className="text-3xl">
                                                            ¯\_(ツ)_/¯
                                                        </p>
                                                        <h2>
                                                            You don’t have any
                                                            dictionaries to
                                                            install.
                                                        </h2>
                                                        <p>
                                                            Search and add a
                                                            fictional universe
                                                            to get started.
                                                        </p>
                                                    </div>
                                                ) : (
                                                    <>
                                                        {library.map(
                                                            (libRef) => (
                                                                <div
                                                                    key={
                                                                        libRef[0]
                                                                            .url
                                                                    }
                                                                >
                                                                    <div className="relative group py-2 px-5 flex items-center">
                                                                        <LibraryCard
                                                                            libRef={
                                                                                libRef[0]
                                                                            }
                                                                        />
                                                                    </div>
                                                                </div>
                                                            )
                                                        )}
                                                    </>
                                                )}
                                            </div>

                                            <div className="library-buttons w-full p-6">
                                                <div className="flex">
                                                    {library.length === 0 ? (
                                                        <></>
                                                    ) : (
                                                        <>
                                                            <button
                                                                type="button"
                                                                onClick={() => {
                                                                    triggerModalStart();
                                                                    setOpen(
                                                                        false
                                                                    );
                                                                }}
                                                                className="flex-1 bg-white text-runik-neutral-dark hover:bg-opacity-100 py-2 px-4 border-2 border-runik-neutral-dark rounded-md hover:shadow-lg hover:bg-runik-primary-med hover:border-transparent duration-200 font-medium"
                                                            >
                                                                Install All
                                                            </button>
                                                            <button
                                                                type="button"
                                                                onClick={() => {
                                                                    removeAllReferences();
                                                                }}
                                                                className="flex-1 ml-3 bg-red-500 hover:bg-red-700 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-runik-neutral-light duration-200"
                                                            >
                                                                Clear Library
                                                            </button>
                                                        </>
                                                    )}
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
