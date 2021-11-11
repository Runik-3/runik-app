const Avatar = () => {
    return (
        <div className="w-24 h-24 relative mb-4">
            <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
                <img
                    src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
                    alt="lovely avatar"
                    className="object-cover object-center w-full h-full"
                />
            </div>
            <h3 className="font-spartan p-2">Gino Potesta, MBA</h3>
        </div>
    );
};

export default Avatar;
