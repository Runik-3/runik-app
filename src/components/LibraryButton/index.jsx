/* eslint-disable react/jsx-props-no-spreading */
import LibraryIcon from '../Icons/LibraryIcon';

/* eslint-disable react/prop-types */
function LibraryButton({ ...props }) {
    return (
        <button
            type="button"
            className="bg-indigo-50 px-6 py-2 rounded-md text-indigo-500 hover:bg-indigo-200 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            {...props}
        >
            <LibraryIcon />
        </button>
    );
}

export default LibraryButton;
