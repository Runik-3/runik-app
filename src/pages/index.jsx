import MainLogo from '../components/MainLogo';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';

export default function Home() {
    return (
        <div className="flex flex-col min-h-full h-screen">
            <NavBar />
            <div className="flex flex-col items-center justify-between h-96 w-5/6 max-w-5xl mx-auto pt-20">
                <MainLogo />
                <SearchBar />
            </div>
            <div className=" flex bg-gradient-to-t from-gray-400 h-3/5" />
        </div>
    );
}
