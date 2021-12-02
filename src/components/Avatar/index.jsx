import Image from 'next/image';
import LinkedIn from '../Icons/LinkedIn';

// eslint-disable-next-line react/prop-types
const Avatar = ({ name, title, path, url }) => {
    return (
        <a href={`${url}`} target="_blank" rel="noreferrer">
            <div className="w-64 h-24 flex mb-8 mr-10 ml-10 pt-4 items-center relative ">
                <div className="w-24 h-24 object-cover object-center rounded-full overflow-hidden drop-shadow-lg hover:scale-110 cursor-pointer transition-ease-in-out duration-500">
                    <Image src={path} alt="profile avatar" />
                </div>
                <div className="absolute left-20 top-16">
                    <LinkedIn url={url} />
                </div>
                <div className="flex flex-col ml-10">
                    <p className="font-spartan pt-4 font-semibold text-2xl pb-0">
                        {name}
                    </p>
                    <p className="font-spartan font-normal text-lg">{title}</p>
                </div>
            </div>
        </a>
    );
};

export default Avatar;
