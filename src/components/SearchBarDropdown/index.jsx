/* eslint-disable react/prop-types */
import SearchDropdownItem from '../SearchDropdownItem';

export default function SearchBarDropdown({
    barVisibility,
    dropdownVisibility,
    liveResults,
}) {
    return (
        <div
            className={`${dropdownVisibility} relative top-0 w-2/3 mx-auto bg-white rounded-b-2xl px-8 py-4 ${
                barVisibility === 'invisible' ? 'hidden' : 'block'
            }`}
        >
            <ul>
                {liveResults.map((result, i) => {
                    if (i < 5) {
                        return (
                            <SearchDropdownItem
                                key={result.item.url}
                                title={result.item.title}
                                url={result.item.url}
                            />
                        );
                    }
                })}
            </ul>
        </div>
    );
}
