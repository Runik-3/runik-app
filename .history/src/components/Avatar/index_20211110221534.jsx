const Avatar = () => {
    return (
        <div className="w-30 h-30 relative mb-4">
            <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
                <span className="hidden group-hover:table-cell text-white font-bold align-middle">
                    KR
                </span>
                <img
                    src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
                    alt="lovely avatar"
                    className="object-cover object-center w-full h-full visible group-hover:hidden"
                />
            </div>
            <h3 className="font-spartann">Gino Potesta, MBA</h3>
        </div>
    );
};

export default Avatar;
