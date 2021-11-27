import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import ResultsCard from '../components/ResultsCard';
import NavBar from '../components/NavBar';
import booksList from '../data/booksList.json';
import Footer from '../components/Footer';

const options = {
    keys: ['title', 'author'],
};
const fuse = new Fuse(booksList, options);

export default function Results() {
    const router = useRouter();
    const [liveResults, setLiveResults] = useState([]);

    function filterSearch(string) {
        setLiveResults(fuse.search(string));
    }

    useEffect(() => {
        if (!router.isReady) return;
        const { query } = router.query;
        filterSearch(query);
    }, [router.isReady]);

    return (
        <div className="flex flex-col justify-center items-center w-full min-h-screen bg-gradient-to-b from-runik-neutral-light to-runik-background-blue">
            {/* The NavBar has replaced the original standalone comps, the sizing and fitting is off and needs to be adjusted accordingly, the props attached to NavBar are for the icons that need to switch visibility depending on page */}
            <div className="flex pb-5 w-full max-w-8xl justify-start items-start">
                <NavBar aDisplay="hidden" rDisplay="flex" />
            </div>
            {/* this is new and needs to be here so user can go back to search page from results page, please make it fit correctly within the page */}
            <div className="border-b border-[#C4C4C4]">
                {' '}
                {/* YOURE HERE MATTEO */}
                <p className="font-spartan font-semibold text-2xl ">Results</p>
            </div>
            <div className="w-11/12 flex justify-center items-center">
                <div className="flex w-11/12 max-w-6xl justify-evenly items-center py-16 flex-wrap">
                    {liveResults.map((libRef) => {
                        return <ResultsCard key={libRef.url} libRef={libRef} />;
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}
