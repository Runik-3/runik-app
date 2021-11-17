export default function InstallModal({ handleInstall, status }) {
    return (
        <div className="flex justify-center items-center absolute top-0 left-0 bg-black h-screen w-screen z-10 bg-opacity-40">
            <div className="flex-col w-96 h-56 bg-white rounded-xl">
                {status}
            </div>
            <div></div>
        </div>
    );
}
