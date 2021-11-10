import DetailsCard from '../components/DetailsCard';
import LibraryIcon from '../components/Icons/LibraryIcon';
import RunikIcon from '../components/Icons/RunikIcon';
import SearchBar from '../components/SearchBar';
import ResultsCard from '../components/ResultsCard';

export default function Details() {
    return (
        <div className="flex justify-center w-full max-w-8xl  flex-col items-start ml-14">
            <div className="flex py-5 w-11/12 max-w-8xl justify-center items-center">
                <RunikIcon />
                <SearchBar />
                <LibraryIcon />
            </div>
            <div className="flex max-w-8xl justify-evenly items-start py-16">
                <DetailsCard
                    headerTitle="Harry Potter"
                    description="Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights Petrificus Totalus. So thirsty, deluminator."
                    img="http://baconmockup.com/300/400"
                />
            </div>
            <div className="font-spartan font-medium text-2xl pt-16">
                You Might Also Like...
            </div>
            <div className="flex flex-wrap justify-between items-center w-11/12 max-w-5xl ">
                <ResultsCard />
                <ResultsCard />
                <ResultsCard />
            </div>
        </div>
    );
}
