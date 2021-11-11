import MainLogo from '../components/MainLogo';
// eslint-disable-next-line import/no-unresolved
import ArrowBackIcon from '../components/Icons/ArrowBackIcon';
import Avatar from '../components/Avatar';

export default function About() {
    return (
        <div className="flex flex-col min-h-full h-screen">
            <div className="pl-8 pt-8 pb-8">
                <ArrowBackIcon />
            </div>
            <div className="flex text-center flex-col">
                <div className="place-content-center pb-12">
                    <MainLogo />
                </div>
                <div className="pt-12 pl-4 pr-4">
                    <h3 className="font-spartan text-runik-neutral-dark text-2xl">
                        Short blurb about development team and process of the
                        creation of the application.
                    </h3>
                    <h1 className="font-spartan font-bold text-4xl pt-24 pb-12 text-runik-neutral-dark">
                        Meet the Team
                    </h1>
                </div>
            </div>
            <div className="flex justify-around flex-col">
                <div className="flex flex-row flex-wrap justify-evenly pb-12">
                    <Avatar />
                    <Avatar />
                    <Avatar />
                </div>
                <div className="flex flex-row flex-wrap justify-evenly pb-12">
                    <Avatar />
                    <Avatar />
                    <Avatar />
                </div>
            </div>
        </div>
    );
}
