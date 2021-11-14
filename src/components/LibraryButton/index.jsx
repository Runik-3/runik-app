/* eslint-disable react/jsx-props-no-spreading */
import LibraryIcon from '../Icons/LibraryIcon';

/* eslint-disable react/prop-types */
function LibraryButton({ ...props }) {
    return (
        <button type="button" className="" {...props}>
            <LibraryIcon />
        </button>
    );
}

export default LibraryButton;
