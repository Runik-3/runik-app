/* eslint-disable import/no-cycle */
import DetailsCard from '../components/DetailsCard';
import NavBar from '../components/NavBar';
// import ResultsCard from '../components/ResultsCard';
import ArrowBackIcon from '../components/Icons/ArrowBackIcon/Index';
import Footer from '../components/Footer';
// import ResultsCard from '../components/ResultsCard';

export default function Details() {
    return (
        <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-runik-neutral-light to-runik-background-blue">
            <div className="flex pb-5 w-full max-w-8xl justify-start items-start">
                <NavBar aDisplay="hidden" rDisplay="flex" />
            </div>
            <div className="flex flex-col justify-end h-32 w-[73%] max-w-6xl border-b border-[#C4C4C4]">
                <div className="flex flex-row items-end w-auto pb-0.5">
                    <ArrowBackIcon path="/" />
                    <p className="font-spartan font-semibold text-2xl">
                        Details
                    </p>
                </div>
            </div>
            <div className="flex w-11/12 max-w-6xl justify-center items-center py-9">
                <DetailsCard
                    headerTitle="Harry Potter"
                    description="Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights Petrificus Totalus. So thirsty, deluminator."
                    img="http://baconmockup.com/300/400"
                />
            </div>
            {/* <div className="font-spartan font-medium text-2xl pt-16">
                You Might Also Like...
            </div>
            <div className="flex flex-wrap justify-between items-center w-11/12 max-w-5xl ">
                <ResultsCard />
            </div> */}
            <Footer />
        </div>
    );
}
