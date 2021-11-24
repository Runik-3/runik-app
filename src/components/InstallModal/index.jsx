/* eslint-disable react/prop-types */
import Button from '../Button';
import Spinner from '../Spinner';

export default function InstallModal({
    handleInstall,
    setModalActive,
    status,
    error,
    isThinking,
}) {
    return (
        <div className="flex justify-center items-center absolute top-0 left-0 bg-black h-screen w-screen z-10 bg-opacity-40">
            <div className="flex flex-col absolute w-3/6 h-72 bg-white rounded-xl p-6">
                <button
                    type="button"
                    onClick={setModalActive}
                    className="font-spartan absolute top-2 right-2 p-2 pt-2.5 bg-red-400 rounded-lg text-gray-200 text-base cursor-pointer hover:text-white hover:bg-red-500"
                >
                    Cancel
                </button>
                {/* Error modal */}
                <div
                    className={`${
                        error ? 'flex' : 'hidden'
                    } flex-col h-full justify-center items-center text-red-500`}
                >
                    <h3 className="text-xl font-bold mb-4">Error:</h3>
                    <p className="text-center">{error}</p>
                </div>

                {/* No error modal */}
                <div
                    className={`${
                        error ? 'hidden' : 'flex'
                    } flex-col justify-center items-center h-full w-full`}
                >
                    <div className={`flex ${isThinking ? '' : 'hidden'}`}>
                        <Spinner />
                    </div>
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
                            stroke="green"
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
                        <Button text="Install" onclick={handleInstall} />
                    </div>
                </div>
            </div>
            <div />
        </div>
    );
}
