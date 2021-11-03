/* eslint-disable react/prop-types */
const Button = ({ size }) => {
    return (
        <button
            type="button"
            className={`flex ${
                size === 'md' ? 'py-6' : 'py-8'
            } px-14 border-2 border-runik-neutral-dark rounded-2xl font-spartan text-2xl font-semibold`}
        >
            Download
        </button>
    );
};

export default Button;
