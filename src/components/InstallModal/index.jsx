import Spinner from '../Spinner';

export default function InstallModal({ handleInstall, status, isThinking }) {
    return (
        <div className="flex justify-center items-center absolute top-0 left-0 bg-black h-screen w-screen z-10 bg-opacity-40 pointer-events-none">
            <div className="flex flex-col w-96 h-64 bg-white rounded-xl p-6">
                <div className="flex flex-col items-center h-full w-full">
                    <Spinner />
                    {status}
                    <div />
                </div>
            </div>
            <div />
        </div>
    );
}
