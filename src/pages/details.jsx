import DetailsCard from '../components/DetailsCard';
import NavBar from '../components/NavBar';
// import ResultsCard from '../components/ResultsCard';
import ArrowBackIcon from '../components/Icons/ArrowBackIcon/Index';

export default function Details() {
    return (
        <div className="flex w-full min-h-screen flex-col items-start pl-14">
            {/* The NavBar has replaced the original standalone comps, the sizing and fitting is off and needs to be adjusted accordingly, the props attached to NavBar are for the icons that need to switch visibility depending on page */}
            <div className="flex py-5 w-11/12 max-w-8xl justify-start items-start">
                <NavBar aDisplay="hidden" rDisplay="flex" />
            </div>
            {/* this is new and needs to be here so user can go back to search page from results page, please make it fit correctly within the page */}
            <div className="pt-8 flex justify-start items-start max-w-full w-11/12">
                <ArrowBackIcon path="/" />
            </div>
            <div className="flex w-11/12 items-start pb-16 pt-6">
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
        </div>
    );
}
