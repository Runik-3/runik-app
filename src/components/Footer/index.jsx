// eslint-disable-next-line react/prop-types
import Link from 'next/link';
import MediaWikiIcon from '../Icons/MediaWikiIcon/index';
import Github from '../Icons/Github/index';

const Footer = () => {
    return (
        <div className="  w-full flex justify-between p-3 bg-runik-neutral-light border-runik-neutral-gray border-t text-lg font-normal text-runik-neutral-med">
            <div className="flex flex-row justify-evenly cursor-pointer">
                <Link href="/">
                    <p className="pr-5 pl-5 hover:underline">Home</p>
                </Link>
                <Link href="about">
                    <p className="pr-5 pl-5 hover:underline">About</p>
                </Link>
                <Link href="support">
                    <p className="pr-5 pl-5 hover:underline">Support</p>
                </Link>
            </div>
            <div className="flex justify-between items-center w-1/3">
                <Link href="https://github.com/ilius/pyglossary">
                    <p className="cursor-pointer flex items-center text-xs">
                        Powered by Plyglossary
                        <Github />
                    </p>
                </Link>
                <div className="cursor-pointer">
                    <Link href="https://www.mediawiki.org/wiki/MediaWiki">
                        <MediaWikiIcon />
                    </Link>
                </div>
                <p className="pr-5 pl-5">Runik 2021</p>
            </div>
        </div>
    );
};

export default Footer;
