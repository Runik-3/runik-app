/* eslint-disable react/prop-types */
import Spinner from '../Spinner';

export default function InstallModal({
    installFlow,
    handleInstall,
    setModalStep,
    modalStep,
    handleFileDownload,
    downloads,
    handleDeviceInstall,
    targetFormat,
    status,
    error,
    isThinking,
}) {
    return (
        <div className="flex justify-center items-center absolute top-0 left-0 bg-black h-screen w-screen z-10 bg-opacity-40">
            <div className="flex flex-col absolute w-11/12 sm:w-5/6 md:w-4/6 lg:w-3/6 h-80 bg-white rounded-xl p-6">
                {/* Error modal */}
                <div
                    className={`${
                        error ? 'flex' : 'hidden'
                    } flex-col h-full justify-center items-center text-red-500`}
                >
                    <button
                        type="button"
                        onClick={setModalStep}
                        className="absolute top-2 right-2 font-spartan p-2 bg-red-500 hover:bg-red-700 rounded-lg text-sm cursor-pointer text-white"
                    >
                        Close
                    </button>
                    <h3 className="text-xl font-bold mb-4">Error:</h3>
                    <p className="text-center">{error}</p>
                </div>

                {/* Section needs to be refactored to use a single compoenent with changing values */}
                {/* step 1: options */}
                <div
                    className={`${
                        modalStep === 'options' ? 'flex' : 'hidden'
                    } flex-col items-center justify-center h-full`}
                >
                    <button
                        type="button"
                        onClick={setModalStep}
                        className="absolute top-2 right-2 font-spartan p-2 bg-red-500 hover:bg-red-700 rounded-lg text-sm cursor-pointer text-white"
                    >
                        Close
                    </button>
                    <button
                        type="button"
                        className="p-3 mt-6 border-2 rounded-lg border-runik-neutral-dark text-xl text-runik-neutral-dark hover:bg-runik-primary-med hover:border-transparent hover:shadow-lg duration-200"
                        onClick={() => handleDeviceInstall('kobo')}
                    >
                        Install Directly to Kobo e-reader
                    </button>
                    <p className="text-xl text-runik-neutral-med my-8">OR</p>
                    {/* <div className="flex w-40 justify-between mt-2">
                        <button
                            className={`${
                                targetFormat === 'kobo'
                                    ? 'bg-gray-800 text-white'
                                    : ''
                            } border-2 border-gray-800 px-3 py-1 rounded`}
                            type="button"
                            onClick={() => setTargetFormat('kobo')}
                        >
                            kobo
                        </button>
                        <button
                            className={`${
                                targetFormat === 'xdxf'
                                    ? 'bg-gray-800 text-white'
                                    : ''
                            } border-2 border-gray-800 px-3 py-1 rounded`}
                            type="button"
                            onClick={() => setTargetFormat('xdxf')}
                        >
                            xdxf
                        </button>
                    </div> */}
                    <button
                        type="button"
                        className="text-lg underline hover:text-runik-neutral-med duration-200"
                        onClick={() => handleFileDownload(targetFormat)}
                    >
                        Download dictionaries as{' '}
                        <span className="font-bold">{targetFormat}</span> files
                        →
                    </button>
                </div>

                {/* step 2: dbcheck */}
                <div
                    className={`${
                        modalStep === 'dbcheck' ? 'flex' : 'hidden'
                    } flex-col justify-center items-center h-full w-full`}
                >
                    <div className={`flex ${isThinking ? '' : 'hidden'}`}>
                        <Spinner />
                    </div>
                    <p className="text-center my-8">{status}</p>
                    <div className="absolute flex w-11/12 sm:w-1/2 justify-around bottom-8">
                        <button
                            type="button"
                            onClick={setModalStep}
                            className="font-spartan p-2 bg-red-500 hover:bg-red-700 rounded-lg text-white cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className={`${
                                !installFlow ? 'hidden' : ''
                            } font-spartan p-2 rounded-lg border-2 border-gray-300 text-gray-300 cursor-default`}
                        >
                            Add to Device
                        </button>
                    </div>
                </div>

                {/* Step 3: generating */}
                <div
                    className={`${
                        modalStep === 'generating' ? 'flex' : 'hidden'
                    } flex-col justify-center items-center h-full w-full`}
                >
                    <div className={`flex ${isThinking ? '' : 'hidden'}`}>
                        <Spinner />
                    </div>
                    <p className="text-center my-8">{status}</p>
                    <div className="absolute flex w-1/2 justify-around bottom-8">
                        <button
                            type="button"
                            onClick={setModalStep}
                            className="font-spartan p-2 bg-red-500 hover:bg-red-700 rounded-lg text-white cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className={`${
                                !installFlow ? 'hidden' : ''
                            } font-spartan p-2 rounded-lg border-2 border-gray-300 text-gray-300 cursor-default`}
                        >
                            Add to Device
                        </button>
                    </div>
                </div>

                {/* step 4: converting */}
                <div
                    className={`${
                        modalStep === 'converting' ? 'flex' : 'hidden'
                    } flex-col justify-center items-center h-full w-full`}
                >
                    <div className={`flex ${isThinking ? '' : 'hidden'}`}>
                        <Spinner />
                    </div>
                    <p className="text-center my-8">{status}</p>
                    <div className="absolute flex w-1/2 justify-around bottom-8">
                        <button
                            type="button"
                            onClick={setModalStep}
                            className="font-spartan p-2 bg-red-500 hover:bg-red-700 rounded-lg text-white cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className={`${
                                !installFlow ? 'hidden' : ''
                            } font-spartan p-2 rounded-lg border-2 border-gray-300 text-gray-300 cursor-default`}
                        >
                            Add to Device
                        </button>
                    </div>
                </div>

                {/* step5: install */}
                <div
                    className={`${
                        modalStep === 'install' && !error ? 'flex' : 'hidden'
                    } flex-col justify-center items-center h-full w-full`}
                >
                    <svg
                        className="mb-8"
                        width="48"
                        height="79"
                        viewBox="0 0 48 79"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            x="2"
                            y="2"
                            width="44"
                            height="55"
                            rx="3"
                            stroke="black"
                            strokeWidth="4"
                        />
                        <path
                            d="M24 67.3701C24 76.7425 28.9383 77.5472 31.4074 76.778"
                            stroke="url(#paint0_linear_1232_1126)"
                            strokeWidth="3"
                        />
                        <path
                            d="M24 57V67.3704"
                            stroke="black"
                            strokeWidth="3"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_1232_1126"
                                x1="22.5"
                                y1="72"
                                x2="25.5"
                                y2="77"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop />
                                <stop offset="1" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <p className="mb-20 w-full sm:w-4/5 text-center">
                        {status}
                    </p>
                    <div className="absolute flex w-5/6 sm:w-1/2 justify-around bottom-8">
                        <button
                            type="button"
                            onClick={setModalStep}
                            className="font-spartan p-2 bg-red-500 hover:bg-red-700 rounded-lg text-white cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="font-spartan p-2 rounded-lg border-2 border-runik-neutral-dark text-runik-neutral-dark cursor-pointer hover:border-transparent hover:bg-runik-primary-med hover:shadow-lg duration-200 "
                            onClick={handleInstall}
                        >
                            Add to Device
                        </button>
                    </div>
                </div>

                {/* step 6: installed */}
                <div
                    className={`${
                        modalStep === 'installed' && !error ? 'flex' : 'hidden'
                    } flex-col justify-center items-center h-full w-full`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="MediumSeaGreen"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-check-circle"
                    >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>

                    <p className="text-center my-8">{status}</p>
                    <div className="absolute flex w-1/2 justify-around bottom-8">
                        <button
                            type="button"
                            onClick={setModalStep}
                            className="font-spartan p-2 px-4 bg-transparent border-runik-neutral-dark border-2 rounded-lg text-runik-neutral-dark cursor-pointer hover:text-black hover:bg-blackhover:border-black"
                        >
                            Done!
                        </button>
                    </div>
                </div>

                {/* step x: download */}
                <div
                    className={`${
                        modalStep === 'download' && !error ? 'flex' : 'hidden'
                    } flex-col justify-start items-center h-full w-full`}
                >
                    <button
                        type="button"
                        onClick={setModalStep}
                        className="absolute top-2 right-2 font-spartan p-2 bg-red-500 hover:bg-red-700 rounded-lg text-sm cursor-pointer text-white"
                    >
                        Close
                    </button>
                    <p className="my-5 font-semibold w-5/6 text-lg text-center">
                        {status}
                    </p>
                    <div className="w-full sm:w-5/6 md:4/6 h-full bg-gray-200 rounded-lg p-2 sm:px-6 overflow-scroll">
                        {downloads.map((download) => {
                            if (targetFormat === 'kobo') {
                                return (
                                    <div className="flex my-2 px-4 bg-white rounded p-1 w-full justify-between items-center text-lg bg-runik">
                                        <p>{download.name}</p>
                                        <a
                                            className="border-2 border-runik-neutral-dark rounded-lg p-1 hover:border-transparent hover:bg-runik-primary-med hover:shadow duration-200"
                                            href={download.url}
                                            download={`dicthtml-${download.name}.zip`}
                                        >
                                            <svg
                                                width="32"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M15.9993 21.3335L21.3327 14.6668H17.3327V5.3335H14.666V14.6668H10.666L15.9993 21.3335Z"
                                                    fill="black"
                                                />
                                                <path
                                                    d="M26.666 23.9998H5.33268V14.6665H2.66602V23.9998C2.66602 25.4705 3.86202 26.6665 5.33268 26.6665H26.666C28.1367 26.6665 29.3327 25.4705 29.3327 23.9998V14.6665H26.666V23.9998Z"
                                                    fill="black"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                );
                            }
                            return '';
                        })}
                    </div>
                </div>
            </div>
            <div />
        </div>
    );
}
