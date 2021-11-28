/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Button = ({ size, text, onclick }) => {
    return (
        <button
            type="button"
            className={`flex ${
                size === 'md' ? 'py-6' : 'py-4'
 fix/finishedResultsPage/MorePaddingAdjust/DetailsPage
            } px-14 border-2 border-runik-neutral-dark rounded-xl font-spartan font-semibold transition-ease-in-out duration-500 hover:bg-runik-primary-light`}
            onClick={onclick}
        >
            {text}
        </button>
    );
};

export default Button;
