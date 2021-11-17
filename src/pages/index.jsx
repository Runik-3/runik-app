import MainLogo from '../components/MainLogo';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';

export default function Home() {
    return (
        <div className="flex flex-col min-h-full h-screen">
            <div className="w-11/12 flex items-center justify-center ml-14 py-5">
                <NavBar
                    visibility="invisible"
                    aDisplay="flex"
                    rDisplay="hidden"
                />
            </div>
            <div className="flex flex-col items-center justify-around h-4/5 w-11/12 max-w-5xl mx-auto pt-20">
                <div>
                    <MainLogo />
                </div>
                <div className="w-11/12 h-20">
                    <SearchBar />
                </div>
            </div>
            <div className=" flex bg-gradient-to-t from-gray-400 h-3/5" />
            {/* #9ca3af */}
        </div>
    );
}
