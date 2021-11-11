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
            </div>
            <div>
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
            </div>
            <div className="flex flex-col space-y-2 inner">
                <h3
                    className="text-3xl font-bold text-white"
                    data-unsp-sanitized="clean"
                >
                    Harry Potter
                </h3>
            </div>
        </div>
    );
}
