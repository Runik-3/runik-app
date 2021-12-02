/* eslint-disable react/prop-types */
/* eslint-disable import/no-cycle */
import { useRouter } from 'next/router';
import DetailsCard from '../components/DetailsCard';
import NavBar from '../components/NavBar';
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
            <div className="flex justify-center h-[calc(100vh-135px)]">
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
            <div className="w-full">
                <Footer />
            </div>
        </div>
    );
}
