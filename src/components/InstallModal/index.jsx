/* eslint-disable react/prop-types */
import Button from '../Button';
import Spinner from '../Spinner';

export default function InstallModal({
    handleInstall,
    setModalStep,
    modalStep,
    handleDeviceInstall,
    setTargetDevice,
    targetDevice,
    status,
    error,
    isThinking,
}) {
    return (
        <div className="flex justify-center items-center absolute top-0 left-0 bg-black h-screen w-screen z-10 bg-opacity-40">
            <div className="flex flex-col absolute w-3/6 h-80 bg-white rounded-xl p-6">
                {/* Error modal */}
                <div
                    className={`${
                        error ? 'flex' : 'hidden'
                    } flex-col h-full justify-center items-center text-red-500`}
                >
                    <button
                        type="button"
                        onClick={setModalStep}
                        className="absolute top-2 right-2 font-spartan p-2 bg-red-400 rounded-lg text-gray-200 text-sm cursor-pointer hover:text-white hover:bg-red-500"
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
                        className="absolute top-2 right-2 font-spartan p-2 bg-red-400 rounded-lg text-gray-200 text-sm cursor-pointer hover:text-white hover:bg-red-500"
                    >
                        Close
                    </button>
                    <button
                        type="button"
                        className="p-3 mt-6 border-2 rounded-lg border-black text-xl"
                        onClick={() => handleDeviceInstall('kobo')}
                    >
                        Install Directly to Kobo e-reader
                    </button>
                    <p className="text-xl my-4">or</p>
                    <div className="flex w-40 justify-between mt-2">
                        <button
                            className={`${
                                targetDevice === 'kobo'
                                    ? 'bg-gray-800 text-white'
                                    : ''
                            } border-2 border-gray-800 px-3 py-1 rounded`}
                            type="button"
                            onClick={() => setTargetDevice('kobo')}
                        >
                            kobo
                        </button>
                        <button
                            className={`${
                                targetDevice === 'xdxf'
                                    ? 'bg-gray-800 text-white'
                                    : ''
                            } border-2 border-gray-800 px-3 py-1 rounded`}
                            type="button"
                            onClick={() => setTargetDevice('xdxf')}
                        >
                            xdxf
                        </button>
                    </div>
                    <button type="button" className="text-lg mt-4 underline">
                        Download dictionaries as{' '}
                        <span className="font-bold">{targetDevice}</span> files
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
                    <div className="absolute flex w-1/2 justify-around bottom-8">
                        <button
                            type="button"
                            onClick={setModalStep}
                            className="font-spartan p-2 bg-red-400 border-red-400 border-2 rounded-lg text-gray-200 cursor-pointer hover:text-white hover:bg-red-500 hover:border-red-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="font-spartan p-2 rounded-lg border-2 border-gray-400 text-gray-400 cursor-pointerw"
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
                            className="font-spartan p-2 bg-red-400 border-red-400 border-2 rounded-lg text-gray-200 cursor-pointer hover:text-white hover:bg-red-500 hover:border-red-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="font-spartan p-2 rounded-lg border-2 border-gray-400 text-gray-400 cursor-pointerw"
                        >
                            Add to Device
                        </button>
                    </div>
                </div>

                {/* step 4: converting */}
                <div
                    className={`${modalStep === 'converting' ? '' : 'hidden'}`}
                >
                    <p className="text-center my-8">{status}</p>
                    <div
                        className={`flex ${isThinking ? 'hidden' : ''} ${
                            status === 'Dictionaries installed!' ? 'hidden' : ''
                        }`}
                    >
                        <Button text="Add to Device" onclick={handleInstall} />
                    </div>
                </div>

                {/* step5: install */}
                <div
                    className={`${
                        modalStep === 'install' && !error ? 'flex' : 'hidden'
                    } flex-col justify-center items-center h-full w-full`}
                >
                    <img
                        className="mb-8"
                        src="/icons/e-reader.svg"
                        alt="e-reader icon"
                    />
                    <p className="mb-20 w-4/6 text-lg text-center">{status}</p>
                    <div className="absolute flex w-1/2 justify-around bottom-8">
                        <button
                            type="button"
                            onClick={setModalStep}
                            className="font-spartan p-2 bg-red-400 border-red-400 border-2 rounded-lg text-gray-200 cursor-pointer hover:text-white hover:bg-red-500 hover:border-red-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="font-spartan p-2 rounded-lg border-2 border-runik-neutral-dark text-runik-neutral-dark cursor-pointer hover:border-black hover:text-black "
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
                            className="font-spartan p-2 bg-transparent border-runik-neutral-dark border-2 rounded-lg text-runik-neutral-dark cursor-pointer hover:text-black hover:bg-blackhover:border-black"
                        >
                            Done!
                        </button>
                    </div>
                </div>
            </div>
            <div />
        </div>
    );
}
