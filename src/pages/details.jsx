/* eslint-disable react/prop-types */
/* eslint-disable import/no-cycle */
import { useRouter } from 'next/router';
import DetailsCard from '../components/DetailsCard';
import NavBar from '../components/NavBar';
import ArrowBackIcon from '../components/Icons/ArrowBackIcon/Index';
import Footer from '../components/Footer';
import booksList from '../data/booksList.json';

export default function Details() {
    const router = useRouter();
    const result = router.query;

    const book = booksList.filter((checkBook) => {
        return checkBook.url === result.url;
    });
    const { url, title, author, description, thumbnail, category, languages } =
        book[0] || {};
    return (
        <div className="flex flex-col items-center relative z-0 overflow-visible w-full min-h-screen bg-gradient-to-b from-runik-neutral-light to-runik-background-blue">
            <div className="flex pb-5 w-full max-w-8xl justify-start items-start">
                <NavBar aDisplay="hidden" rDisplay="flex" />
            </div>
            <div className="flex flex-col justify-end h-32 w-[73%] max-w-6xl border-b border-[#C4C4C4]">
                <div className="flex flex-row items-end w-auto pb-0.5">
                    <ArrowBackIcon path="/" />
                    <p className="font-spartan font-semibold text-2xl">
                        Details
                    </p>
                </div>
            </div>
            <div className="flex w-11/12 max-w-6xl justify-center items-center py-9">
                <DetailsCard
                    url={url}
                    title={title}
                    author={author}
                    description={description}
                    thumbnail={thumbnail}
                    category={category}
                    languages={languages}
                />
            </div>
            {/* <div className="font-spartan font-medium text-2xl pt-16">
                You Might Also Like...
            </div>
            <div className="flex flex-wrap justify-between items-center w-11/12 max-w-5xl ">
                <ResultsCard />
            </div> */}
            <Footer />
        </div>
    );
}
