import MainLogo from '../components/MainLogo';
import ArrowBackIcon from '../components/Icons/ArrowBackIcon/Index';

export default function PageNotFound() {
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
                
            </div>
        </div>
            

            <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48 font-spartan">
                <p className="text-sm font-semibold text-black text-opacity-50 uppercase tracking-wide">
                    404 error
                </p>
                <h1 className="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
                    Uh oh! I think you’re lost.
                </h1>
                <p className="mt-2 text-lg font-medium text-black text-opacity-50">
                    It looks like the page you’re looking for doesn&apos;t
                    exist.
                </p>
                <div className="mt-6">
                    <a
                        href="/"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50"
                    >
                        Go back home
                    </a>
                </div>
            </div>
        </main>
    );
}
