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
            <div className="flex justify-center flex-col">
                <div className="align">
                    <div className="pb-12">
                        <MainLogo />
                    </div>
                    <h3 className="font-spartan font-small">
                        Short blurb about development team and process of the
                        creation of the application
                    </h3>
                    <h1 className="font-spartan font-medium text-2xl pt-12 pb-12">
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
                <div className="flex flex-row flex-wrap justify-evenly">
                    <Avatar />
                    <Avatar />
                    <Avatar />
                </div>
            </div>
        </div>
    );
}
