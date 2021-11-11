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
                <h3>Meet the Team</h3>
                <h3>
                    Short blurb about development team and process of the
                    creation of the application
                </h3>
            </div>
            <div className="flex-wrap">
                <div className="flex flex-wrap flex-row">
                    <Avatar />
                    <Avatar />
                    <Avatar />
                </div>
                <div className="flex flex-wrap flex-row">
                    <Avatar />
                    <Avatar />
                    <Avatar />
                </div>
            </div>
        </div>
    );
}