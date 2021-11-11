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
            </div>
            <div className="flex-wrap">
                <div className="flex-wrap flex">
                    <Avatar />
                    <Avatar />
                    <Avatar />
                </div>
                <div className="flex-wrap">
                    <Avatar />
                    <Avatar />
                    <Avatar />
                </div>
            </div>
        </div>
    );
}
