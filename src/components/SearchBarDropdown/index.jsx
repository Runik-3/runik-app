/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import SearchDropdownItem from '../SearchDropdownItem';

export default function SearchBarDropdown({
    barVisibility,
    dropdownVisibility,
    liveResults,
    search,
}) {
    function checkResults() {
        if (liveResults.length === 0) {
            return (
                <SearchDropdownItem
                    key=""
                    title=""
                    author=""
                    url=""
                    search=""
                    thumbnail=""
                />
            );
        }
        return (
            <ul>
                {liveResults.map((result, i) => {
                    if (i < 5) {
                        return (
                            <SearchDropdownItem
                                key={result.item.url + i}
                                title={result.item.title}
                                author={
                                    result.item.author ? result.item.author : ''
                                }
                                description={result.item.description}
                                url={result.item.url}
                                thumbnail={result.item.thumbnail}
                                search={search}
                            />
                        );
                    }
                })}
            </ul>
        );
    }
    return (
        <div
            className={`${dropdownVisibility} relative top-0 w-4/6 mx-auto bg-white rounded-b-2xl px-8 py-4 ${
                barVisibility === 'invisible' ? 'hidden' : 'block'
            }`}
        >
            {checkResults()}
        </div>
    );
}
