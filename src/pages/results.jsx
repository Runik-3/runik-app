import RunikIcon from '../components/Icons/RunikIcon/index';
import LibraryIcon from '../components/Icons/LibraryIcon/index';
import SearchBar from '../components/SearchBar';
import DetailsCard from '../components/DetailsCard';

export default function Results() {
    return (
        <div className="flex justify-center w-full flex-col items-center">
            <div className="flex py-5 w-full max-w-5xl justify-evenly items-center">
                <RunikIcon />
                <SearchBar />
                <LibraryIcon />
            </div>
            <div className="flex w-full max-w-5xl justify-evenly items-center py-16">
                <DetailsCard
                    headerTitle="Harry Potter"
                    description="Blah Blah Wizards and dragons"
                    img="https://placekitten.com/600/600"
                />
            </div>
        </div>
    );
}
