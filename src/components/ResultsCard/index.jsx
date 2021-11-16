/* eslint-disable react/jsx-key */
// import Link from 'next/link';
import AddButton from '../Icons/AddButton';
import books from '../../data/booksList.json';
import LibraryCard from '../LibraryCard';

export default function ResultsCard() {
    function trim(text, count) {
        return text.slice(0, count) + (text.length > count ? '...' : '');
    }

    return (
        // <Link href="details">
        <div className="flex flex-row flex-wrap">
            {books.map((book) => {
                // eslint-disable-next-line no-undef
                const [
                    // url,
                    title,
                    // author,
                    description,
                    thumbnail,
                    // category,
                ] = [
                    // book.url,
                    book.title,
                    // book.author,
                    book.description,
                    book.thumbnail,
                    // book.category,
                ];
                return (
                    <div className="flex max-w-xs w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto max-h-full m-4">
                        <div className="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card">
                            <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-runik-neutral-dark to-transparent" />
                            <div className="relative cursor-pointer group z-10 pl-3.5 pr-6 pt-6 space-y-20">
                                <div className="flex w-full justify-end">
                                    <button
                                        type="button"
                                        className="hover:bg-runik-primary-light rounded-full"
                                        onClick={() =>
                                            LibraryCard(title, thumbnail)
                                        }
                                    >
                                        <AddButton />
                                    </button>
                                </div>
                                <div className="poster__info align-self-end w-full h-80">
                                    <div className="h-32 m-6" />
                                    <div className="space-y-6 detail_info">
                                        <div className="flex flex-col space-y-2 inner">
                                            <h3
                                                className="text-3xl font-bold text-white"
                                                data-unsp-sanitized="clean"
                                            >
                                                {title}
                                            </h3>
                                        </div>
                                        <div className="flex flex-col overview">
                                            <div className="flex flex-col" />

                                            <p className="text-sm text-gray-100">
                                                {trim(description, 100)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img
                                className="absolute inset-0 transform w-full -translate-y-4"
                                src={thumbnail}
                                alt="dictionaryImage"
                            />
                        </div>
                    </div>
                );
            })}
        </div>
        // </Link>
    );
}
