/* eslint-disable react/prop-types */
import Button from '../Button';
import Spinner from '../Spinner';

export default function InstallModal({
    handleInstall,
    setModalStep,
    modalStep,
    handleGetDict,
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
                        onClick={handleGetDict}
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

                {/* Step 2: generating */}
                <div
                    className={`${
                        modalStep === 'generating' ? 'flex' : 'hidden'
                    } flex-col justify-center items-center h-full w-full`}
                >
                    <div className={`flex ${isThinking ? '' : 'hidden'}`}>
                        <Spinner />
                    </div>
                    <p className="text-center my-8">{status}</p>
                    <div className="absolute bottom-8">
                        <button
                            type="button"
                            onClick={setModalStep}
                            className="font-spartan p-2 bg-red-400 border-red-400 border-2 rounded-lg text-gray-200 cursor-pointer hover:text-white hover:bg-red-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick=""
                            className="font-spartan p-2 rounded-lg border-2 border-gray-800 text-gray-800 cursor-pointer hover:text-black hover:border-black"
                        >
                            Cancel
                        </button>
                    </div>
                </div>

                {/* step 3: converting */}
                <div
                    className={`${modalStep === 'converting' ? '' : 'hidden'}`}
                >
                    <div
                        className={`flex ${
                            status === 'Dictionaries installed!' ? '' : 'hidden'
                        }`}
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
                    </div>
                    <p className="text-center my-8">{status}</p>
                    <div
                        className={`flex ${isThinking ? 'hidden' : ''} ${
                            status === 'Dictionaries installed!' ? 'hidden' : ''
                        }`}
                    >
                        <Button text="Add to Device" onclick={handleInstall} />
                    </div>
                </div>
            </div>
            <div />
        </div>
    );
}
