/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Button = ({ size, text, onclick }) => {
    return (
        <button
            type="button"
            className={`flex ${
                size === 'md' ? 'py-6' : 'py-4'
            } px-14 border-2 border-runik-neutral-dark rounded-xl text-lg font-spartan font-semibold transition-all hover:shadow-lg hover:bg-runik-primary-med hover:border-runik-primary-med`}
            onClick={onclick}
        >
            {text}
        </button>
    );
};

export default Button;
