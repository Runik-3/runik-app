import MainLogo from '../components/MainLogo';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="flex flex-col relative z-0 overflow-visible justify-between h-screen bg-gradient-to-b from-runik-neutral-light to-runik-background-blue">
            <div className="flex justify-center">
                <NavBar visibility="hidden" aDisplay="flex" rDisplay="hidden" />
            </div>
            <div className="flex flex-col justify-start h-[calc(100vh-135px)]">
                <div className="flex flex-col items-center justify-between h-96 w-11/12 max-w-5xl mx-auto pt-20">
                    <div>
                        <MainLogo />
                    </div>
                    <div className="w-11/12 max-h-16">
                        <SearchBar SearchHeight="h-16" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
