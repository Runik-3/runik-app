import { useRouter } from 'next/router';
import MainLogo from '../components/MainLogo';
import Footer from '../components/Footer';
import Button from '../components/Button';

export default function PageNotFound() {
    const router = useRouter();

    return (
        <div className="flex flex-col h-full w-full bg-gradient-to-b from-runik-neutral-light to-runik-background-blue">
            <div className="flex text-center flex-col justify-center items-center">
                <div className="pb-12 flex justify-evenly pt-28">
                    <MainLogo />
                </div>
                <div className="text-3xl font-spartan font-semibold pb-2">
                    Whoops!
                </div>
                <div className="text-lg font-spartan pb-5">
                    Looks like the page you are looking for is missing!
                </div>
                <div className="text-lg font-spartan text-runik-neutral-gray pb-24">
                    Error Code 404
                </div>
                <div className="pb-44">
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
