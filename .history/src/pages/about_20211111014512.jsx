import MainLogo from '../components/MainLogo';
import ArrowBackIcon from '../components/Icons/ArrowBackIcon/Index';
import Avatar from '../components/Avatar';

export default function About() {
    return (
        <div className="flex flex-col min-h-full h-screen">
            <div className="pl-8 pt-8 pb-8">
                <ArrowBackIcon />
            </div>
            <div className="flex text-center flex-col">
                <div className="pb-12 flex justify-evenly">
                    <MainLogo />
                </div>
                <div className="pt-12 pl-4 pr-4 font-spartan text-runik-neutral-dark">
                    <p className="text-2xl">
                        Short blurb about development team and process of the
                        creation of the application.
                    </p>
                    <h1 className="font-bold text-4xl pt-24 pb-12">
                        Meet the Team
                    </h1>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-row flex-wrap justify-evenly pb-12 max-w-2xl">
                    <Avatar />
                    <Avatar />
                    <Avatar />
                    <Avatar />
                    <Avatar />
                    <Avatar />
                </div>
            </div>
        </div>
    );
}
