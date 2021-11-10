import RunikIcon from '../components/Icons/RunikIcon/index';
import LibraryIcon from '../components/Icons/LibraryIcon/index';
import SearchBar from '../components/SearchBar';
import ResultsCard from '../components/ResultsCard';
import Library from './library';

export default function Results() {
    return (
        <div className="flex justify-center w-full flex-col items-center">
            <div className="flex py-5 w-11/12 max-w-8xl justify-center items-center">
                <RunikIcon />
                <SearchBar />
                <LibraryIcon />
            </div>
            <div>
                <Library />
            </div>
            <div className="flex w-full max-w-6xl justify-evenly items-center py-16 flex-wrap">
                <ResultsCard />
                <ResultsCard />
                <ResultsCard />
                <ResultsCard />
                <ResultsCard />
                <ResultsCard />
            </div>
            <div className="flex bg-gradient-to-t from-gray-400 h-3/5 w-full" />
        </div>
    );
}
