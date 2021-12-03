import { useRouter } from 'next/router';
import MainLogo from '../components/MainLogo';
import Footer from '../components/Footer';
import Button from '../components/Button';
import NavBar from '../components/NavBar';

export default function PageNotFound() {
    const router = useRouter();

    return (
        <div className="flex z-0 relative flex-col h-full w-full bg-gradient-to-b from-runik-neutral-light to-runik-background-blue">
            <NavBar aDisplay="hidden" />
            <div className="h-full flex text-center flex-col justify-center items-center">
                <div className="pb-20 flex justify-evenly pt-20">
                    <MainLogo />
                </div>
                <div className="text-3xl font-spartan font-semibold pb-3">
                    Whoops!
                </div>
                <div className="text-lg font-spartan pb-3">
                    Looks like the page you are looking for is missing!
                </div>
                <div className="text-lg font-spartan text-runik-neutral-gray pb-24">
                    Error Code 404
                </div>
                <div className="pb-24">
                    <Button
                        size="md"
                        text="Take me back"
                        onclick={() => router.back()}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}
