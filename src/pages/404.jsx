import MainLogo from '../components/MainLogo';
import ArrowBackIcon from '../components/Icons/ArrowBackIcon/Index';
import Footer from '../components/Footer';

export default function PageNotFound() {
    return (
        <div className="flex flex-col h-full w-full bg-gradient-to-b from-runik-neutral-light to-runik-background-blue">
            <div className="pl-8 pt-8 pb-8">
                <ArrowBackIcon path="/" />
            </div>
            <div className="flex text-center flex-col">
                <div className="pb-12 flex justify-evenly">
                    <MainLogo />
                </div>
                <div className="pt-4 pl-4 pr-4 font-spartan text-runik-neutral-dark">
                    <h1 className="font-bold text-4xl pt-24 pb-12">
                        404 error.
                    </h1>
                    <p className="text-2xl">
                        Uh oh! It looks like the page you&apos;re looking for
                        doesn&apos;t exist.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}
