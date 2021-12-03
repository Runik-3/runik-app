import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import ResultsCard from '../components/ResultsCard';
import NavBar from '../components/NavBar';
import booksList from '../data/booksList.json';
import Footer from '../components/Footer';
import BackToTopIcon from '../components/Icons/BackToTopIcon';

const options = {
    keys: ['title', 'author'],
};
const fuse = new Fuse(booksList, options);

export default function Results() {
    const router = useRouter();
    const [liveResults, setLiveResults] = useState([]);
    //
    const [showButton, setShowButton] = useState(false);

    function filterSearch(string) {
        setLiveResults(fuse.search(string));
    }

    useEffect(() => {
        if (!router.isReady) return;
        const { query } = router.query;
        filterSearch(query);
    }, [router.isReady]);

    //
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    function checkResults() {
        if (liveResults.length === 0) {
            return (
                <div className="flex flex-col items-center relative z-0 overflow-visible w-full min-h-screen bg-gradient-to-b from-runik-neutral-light to-runik-background-blue">
                    <div className="flex pb-5 w-full max-w-8xl justify-start items-start">
                        <NavBar aDisplay="hidden" rDisplay="flex" />
                    </div>
                    <div className="flex flex-col justify-end h-32 w-[73%] pb-0.5 max-w-6xl border-b border-[#C4C4C4]">
                        <p className="font-spartan font-semibold text-2xl">
                            Results
                        </p>
                    </div>
                    <div className="w-11/12 flex justify-center items-center">
                        <p>
                            Oops. Did you forget to search for a book? Use our
                            search bar to find the dictionary you are looking
                            for.
                        </p>
                    </div>
                    <div className="w-full absolute bottom-0">
                        <Footer />
                    </div>
                </div>
            );
        }
        return (
            <div className="flex flex-col relative z-0 overflow-visible justify-center items-center w-full min-h-screen bg-gradient-to-b from-runik-neutral-light to-runik-background-blue">
                <div className="flex sticky top-0 z-40 pb-5 w-full max-w-8xl justify-start items-start">
                    <NavBar aDisplay="hidden" rDisplay="flex" />
                </div>
                <div className="flex flex-col justify-end h-32 w-[73%] pb-0.5 max-w-6xl border-b border-[#C4C4C4]">
                    <p className="font-spartan font-semibold text-2xl">
                        Results
                    </p>
                </div>
                <div className="w-11/12 flex justify-center items-center">
                    <div className="flex w-11/12 max-w-6xl justify-evenly items-center py-16 flex-wrap">
                        {liveResults.map((libRef) => {
                            return (
                                <ResultsCard key={libRef.url} libRef={libRef} />
                            );
                        })}
                    </div>
                </div>
                {showButton && (
                    <div className="fixed bottom-16 right-5 cursor-pointer">
                        <BackToTopIcon onclick={scrollToTop} />
                    </div>
                )}
                <Footer />
            </div>
        );
    }

    return checkResults();
}
