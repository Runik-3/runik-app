import MainLogo from '../components/MainLogo';
// eslint-disable-next-line import/no-unresolved
import ArrowBackIcon from '../components/Icons/ArrowBackIcon';
import Avatar from '../components/Avatar';

export default function About() {
    return (
        <div className="flex-1">
            <div className="flex pl-8 pt-8">
                <ArrowBackIcon />
            </div>
            <div>
                <MainLogo />
                <h3 className="font-spartan font-small">
                    Short blurb about development team and process of the
                    creation of the application
                </h3>
                <h1 className="font-spartan font-medium text-2xl pt-16">
                    Meet the Team
                </h1>
            </div>
            <div className="flex fle">
                <div className="flex flex-row">
                    <Avatar />
                    <Avatar />
                    <Avatar />
                </div>
                <div className="flex flex-row">
                    <Avatar />
                    <Avatar />
                    <Avatar />
                </div>
            </div>
        </div>
    );
}
