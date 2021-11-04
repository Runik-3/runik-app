import AddButton from '../Icons/AddButton';

export default function LibraryCard() {
    return (
        <div className=" h-screen ">
            <div className="overflow-hidden flex p-3 pb-8 pt-2 shadow-lg rounded-lg w-80 h-20 bg-gradient-to-r from-runik-neutral-dark to-transparent justify-between background-image:">
                <div className="text-lg text-left align-text-top text-white font-bold font-spartan ">
                    Harry Potter
                </div>
                <button
                    type="button"
                    className="hover:bg-runik-primary-light rounded-full"
                >
                    <AddButton />
                </button>
                {/* <img
                    className="absolute transform w-full -translate-y-4"
                    src="http://image.tmdb.org/t/p/w342/s1FhMAr91WL8D5DeHOcuBELtiHJ.jpg"
                    alt="dictionaryImage"
                /> */}
            </div>
        </div>
    );
}
