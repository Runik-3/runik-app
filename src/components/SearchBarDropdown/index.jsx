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
    return (
        <div
            id="searchbar"
            className={`${dropdownVisibility} relative top-0 w-4/6 mx-auto bg-white rounded-b-2xl px-8 py-4 ${
                barVisibility === 'invisible' ? 'hidden' : 'block'
            }`}
        >
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
                                url={result.item.url}
                                search={search}
                            />
                        );
                    }
                })}
            </ul>
        </div>
    );
}
