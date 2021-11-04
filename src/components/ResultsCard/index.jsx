import AddButton from '../Icons/AddButton';

export default function ResultsCard() {
    return (
        <div>
            <div className="flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto">
                <div className="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card">
                    <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent" />
                    <div className="relative cursor-pointer group z-10 px-10 pt-10 space-y-20">
                        <button
                            type="button"
                            className="hover:bg-runik-primary-light rounded-full"
                        >
                            <AddButton />
                        </button>
                        <div className="poster__info align-self-end w-full">
                            <div className="h-32" />
                            <div className="space-y-6 detail_info">
                                <div className="flex flex-col space-y-2 inner">
                                    <h3
                                        className="text-3xl font-bold text-white"
                                        data-unsp-sanitized="clean"
                                    >
                                        Harry Potter
                                    </h3>
                                </div>
                                <div className="flex flex-col overview">
                                    <div className="flex flex-col" />

                                    <p className="text-s text-gray-100 mb-6">
                                        Toad-like smile Flourish and Blotts he
                                        knew I’d come back Quidditch World Cup.
                                        Fat Lady baubles banana fritters fairy
                                        lights Petrificus Totalus. So thirsty,
                                        deluminator
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        className="absolute inset-0 transform w-full -translate-y-4"
                        src="http://image.tmdb.org/t/p/w342/s1FhMAr91WL8D5DeHOcuBELtiHJ.jpg"
                        alt="dictionaryImage"
                    />
                </div>
            </div>
        </div>
    );
}
