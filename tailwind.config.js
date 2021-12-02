/* eslint-disable global-require */
module.exports = {
    mode: 'jit',
    purge: {
        content: [
            './src/pages/**/**.{js,ts,jsx,tsx}',
            './src/styles/**/**.{js,ts,jsx,tsx}',
            './src/components/**/**.{js,ts,jsx,tsx}',
        ],
        safelist: [],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                spartan: ['Spartan', 'sans-serif'],
                norse: ['Norse', 'sans'],
            },
            colors: {
                'runik-primary-dark': '#003153',
                'runik-primary-med': '#D3F4FF',
                'runik-primary-light': '#8DDCE3',
                'runik-neutral-light': '#f6f6f6',
                'runik-neutral-med': '#77797B',
                'runik-neutral-dark': '#323232',
                'runik-neutral-gray': '#c4c4c4',
                'runik-background-blue': '#EDF0F5',
                'runik-library-light': '#EEF6FF',
                'runik-library-dark': '#D1D9E6',
            },
            spacing: {
                'library-icon-top': '18px',
                'library-icon-right': '250px',
                'library-children': '120px',
            },
            width: {
                'library-icon-width': '66px',
                'library-children-width': '280px',
                'details-image-width': '257px',
                'content-width': '900px',
            },
            height: {
                'library-icon-height': '66px',
                'search-bar-height': '60px',
                'details-image-height': '427px',
            },
            outline: {
                dark: '2px solid #323232',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/typography'),
    ],
};
