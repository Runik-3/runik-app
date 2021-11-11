const Avatar = () => {
    return (
        <div className="w-40 h-50 relative mb-4">
            <div className="w-full h-40 rounded-full overflow-hidden shadow-outer text-center bg-purple ">
                <img
                    src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
                    alt="profile avatar "
                    className="object-cover object-center w-full h-full"
                />
            </div>
            <h3 className="font-spartan pt-4">Gino Potesta, MBA</h3>
        </div>
    );
};

export default Avatar;
