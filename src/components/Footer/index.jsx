// eslint-disable-next-line react/prop-types
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="w-full flex justify-between p-3 border-runik-neutral-gray border-t text-lg font-normal">
            <div className="flex flex-row justify-evenly text-runik-neutral-gray">
                <Link href="/">
                    <p className="pr-5 pl-5">Home</p>
                </Link>
                <Link href="about">
                    <p className="pr-5 pl-5">About</p>
                </Link>
                <Link href="support">
                    <p className="pr-5 pl-5">Support</p>
                </Link>
            </div>
            <div className="text-runik-neutral-gray">
                <p className="pr-5 pl-5">Runik 2021</p>
            </div>
        </div>
    );
};

export default Footer;
