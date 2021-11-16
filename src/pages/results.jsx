// import RunikIcon from '../components/Icons/RunikIcon/index';
// import LibraryIcon from '../components/Icons/LibraryIcon/index';
// import SearchBar from '../components/SearchBar';
import ResultsCard from '../components/ResultsCard';
import NavBar from '../components/NavBar';
import ArrowBackIcon from '../components/Icons/ArrowBackIcon/Index';
// import data from '../data/booksList.json';

export default function Results() {
    return (
        <div className="flex justify-center w-full flex-col items-start ml-14">
            {/* The NavBar has replaced the original standalone comps, the sizing and fitting is off and needs to be adjusted accordingly, the props attached to NavBar are for the icons that need to switch visibility depending on page */}
            <div className="flex py-5 w-11/12 max-w-8xl justify-start items-start">
                <NavBar aDisplay="hidden" rDisplay="flex" />
            </div>
            {/* this is new and needs to be here so user can go back to search page from results page, please make it fit correctly within the page */}
            <div className="pt-8 flex justify-start items-start max-w-full w-11/12">
                <ArrowBackIcon path="/" />
            </div>
            <div />
            <div className="w-11/12 flex justify-center items-center">
                <div className="flex w-11/12 max-w-6xl justify-evenly items-center py-16 flex-wrap">
                    <ResultsCard />
                </div>
            </div>
            <div className="flex bg-gradient-to-t from-gray-400 h-3/5 w-full" />
        </div>
    );
}
