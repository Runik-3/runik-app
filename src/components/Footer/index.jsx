// eslint-disable-next-line react/prop-types
import Link from 'next/link';
import MediaWikiIcon from '../Icons/MediaWikiIcon/index';
import Github from '../Icons/Github/index';

const Footer = () => {
    return (
        <div className="  w-full flex flex-col sm:flex-row justify-between p-3 bg-runik-neutral-light border-runik-neutral-gray border-t text-sm sm:text-lg font-normal text-runik-neutral-med">
            <div className="flex flex-row justify-evenly items-center  ml-6 sm:ml-0">
                <Link href="/">
                    <p className="px-5 hover:underline cursor-pointer">Home</p>
                </Link>
                <Link href="about">
                    <p className="px-5 hover:underline cursor-pointer">About</p>
                </Link>
            </div>
            <div className="flex justify-center items-start mt-3 sm:mt-0">
                <a
                    className="mx-2"
                    target="_blank"
                    href="https://github.com/ilius/pyglossary"
                    rel="noreferrer"
                >
                    <Github />
                </a>

                <a
                    className="mx-2"
                    target="_blank"
                    href="https://www.mediawiki.org/wiki/MediaWiki"
                    rel="noreferrer"
                >
                    <MediaWikiIcon />
                </a>
            </div>
        </div>
    );
};

export default Footer;
