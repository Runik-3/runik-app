import MainLogo from '../components/MainLogo';
// eslint-disable-next-line import/no-unresolved
import ArrowBackIcon from '../components/Icons/ArrowBackIcon';
import Avatar from '../components/Avatar';

export default function About() {
    return (
        <div className="flex">
            <div>
                <ArrowBackIcon />
            </div>
            <div>
                <MainLogo />
                <h3>Meet the Team</h3>
            </div>
            <div>
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
            </div>
        </div>
    );
}
