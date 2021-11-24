/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Button = ({ size, text, onclick }) => {
    return (
        <button
            type="button"
            className={`flex ${
                size === 'md' ? 'py-6' : 'py-4'
            } px-14 border-2 border-runik-neutral-dark rounded-xl font-spartan font-semibold`}
            onClick={onclick}
        >
            {text}
        </button>
    );
};

export default Button;
