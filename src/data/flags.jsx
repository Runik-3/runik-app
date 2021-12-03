/* eslint-disable react/jsx-props-no-spreading */
const flags = {
    en: {
        name: 'English',
        icon: (props) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={25}
                height={25}
                viewBox="0 0 7410 3900"
                {...props}
            >
                <path fill="#b22234" d="M0 0h7410v3900H0z" />
                <path
                    d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                    stroke="#fff"
                    strokeWidth={300}
                />
                <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                <g fill="#fff">
                    <g id="d">
                        <g id="c">
                            <g id="e">
                                <g id="b">
                                    <path
                                        id="a"
                                        d="m247 90 70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                                    />
                                    <use xlinkHref="#a" y={420} />
                                    <use xlinkHref="#a" y={840} />
                                    <use xlinkHref="#a" y={1260} />
                                </g>
                                <use xlinkHref="#a" y={1680} />
                            </g>
                            <use xlinkHref="#b" x={247} y={210} />
                        </g>
                        <use xlinkHref="#c" x={494} />
                    </g>
                    <use xlinkHref="#d" x={988} />
                    <use xlinkHref="#c" x={1976} />
                    <use xlinkHref="#e" x={2470} />
                </g>
            </svg>
        ),
    },
    af: {
        name: 'Afrikaans',
        icon: () => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={25}
                height={25}
                viewBox="0 0 9 6"
            >
                <clipPath id="c">
                    <path d="m0 0 4.5 3L0 6" id="b" />
                </clipPath>
                <clipPath id="a">
                    <path d="M0 0h9v6H0z" />
                </clipPath>
                <g clipPath="url(#a)">
                    <path d="M0 0v6h9V0z" fill="#002395" />
                    <path d="M0 0v3h9V0z" fill="#de3831" />
                    <g strokeWidth={2} stroke="#fff">
                        <path d="m0 0 4.5 3L0 6m4.5-3H9" id="d" />
                        <use
                            xlinkHref="#b"
                            stroke="#ffb612"
                            clipPath="url(#c)"
                        />
                    </g>
                    <use
                        xlinkHref="#d"
                        fill="none"
                        stroke="#007a4d"
                        strokeWidth={1.2}
                    />
                </g>
            </svg>
        ),
    },

    ar: {
        name: 'Arabic',
        icon: () => {
            return <>TBD</>;
        },
    },
    ast: {
        name: 'Asturian',
        icon: () => {
            return <>TBD</>;
        },
    },
    az: {
        name: 'Azerbaijani',
        icon: () => {
            return <>TBD</>;
        },
    },
    bcc: {
        name: 'Southern Balochi',
        icon: () => {
            return <>TBD</>;
        },
    },
    be: {
        name: 'Belarusian',
        icon: () => {
            return <>TBD</>;
        },
    },

    'be-tarask': {
        name: 'Belarusian (Taraškievica)',
        icon: () => {
            return <>TBD</>;
        },
    },

    bg: {
        name: 'Bulgarian',
        icon: () => {
            return <>TBD</>;
        },
    },
    bn: {
        name: 'Bangla',
        icon: () => {
            return <>TBD</>;
        },
    },
    br: {
        name: 'Breton',
        icon: () => {
            return <>TBD</>;
        },
    },
    bs: {
        name: 'Bosnian',
        icon: () => {
            return <>TBD</>;
        },
    },
    ca: {
        name: 'Catalan',
        icon: () => {
            return <>TBD</>;
        },
    },
    ce: {
        name: 'Chechen',
        icon: () => {
            return <>TBD</>;
        },
    },
    ckb: {
        name: 'Central Kurdish',
        icon: () => {
            return <>TBD</>;
        },
    },
    cs: {
        name: 'Czech',
        icon: () => {
            return <>TBD</>;
        },
    },
    da: {
        name: 'Danish',
        icon: () => {
            return <>TBD</>;
        },
    },
    de: {
        name: 'German',
        icon: () => {
            return <>TBD</>;
        },
    },
    diq: {
        name: 'Zazaki',
        icon: () => {
            return <>TBD</>;
        },
    },
    el: {
        name: 'Greek',
        icon: () => {
            return <>TBD</>;
        },
    },
    eo: {
        name: 'Esperanto',
        icon: () => {
            return <>TBD</>;
        },
    },
    es: {
        name: 'Spanish',
        icon: () => {
            return <>TBD</>;
        },
    },
    fa: {
        name: 'Persian',
        icon: () => {
            return <>TBD</>;
        },
    },
    fi: {
        name: 'Finnish',
        icon: () => {
            return <>TBD</>;
        },
    },
    fr: {
        name: 'French',
        icon: () => {
            return <>TBD</>;
        },
    },
    gl: {
        name: 'Galician',
        icon: () => {
            return <>TBD</>;
        },
    },
    gu: {
        name: 'Gujarati',
        icon: () => {
            return <>TBD</>;
        },
    },
    he: {
        name: 'Hebrew',
        icon: () => {
            return <>TBD</>;
        },
    },
    hi: {
        name: 'Hindi',
        icon: () => {
            return <>TBD</>;
        },
    },
    hr: {
        name: 'Croatian',
        icon: () => {
            return <>TBD</>;
        },
    },
    hu: {
        name: 'Hungarian',
        icon: () => {
            return <>TBD</>;
        },
    },
    hy: {
        name: 'Armenian',
        icon: () => {
            return <>TBD</>;
        },
    },
    id: {
        name: 'Indonesian',
        icon: () => {
            return <>TBD</>;
        },
    },
    io: {
        name: 'Ido',
        icon: () => {
            return <>TBD</>;
        },
    },
    is: {
        name: 'Icelandic',
        icon: () => {
            return <>TBD</>;
        },
    },
    it: {
        name: 'Italian',
        icon: () => {
            return <>TBD</>;
        },
    },
    ja: {
        name: 'Japanese',
        icon: () => {
            return <>TBD</>;
        },
    },
    jv: {
        name: 'Javanese',
        icon: () => {
            return <>TBD</>;
        },
    },
    ka: {
        name: 'Georgian',
        icon: () => {
            return <>TBD</>;
        },
    },
    kk: {
        name: 'Kazakh',
        icon: () => {
            return <>TBD</>;
        },
    },
    km: {
        name: 'Khmer',
        icon: () => {
            return <>TBD</>;
        },
    },
    ko: {
        name: 'Korean',
        icon: () => {
            return <>TBD</>;
        },
    },
    'ko-kp': {
        name: 'Korean (North Korea)',
        icon: () => {
            return <>TBD</>;
        },
    },
    ksh: {
        name: 'Colognian',
        icon: () => {
            return <>TBD</>;
        },
    },
    ku: {
        name: 'Kurdish',
        icon: () => {
            return <>TBD</>;
        },
    },
    kw: {
        name: 'Cornish',
        icon: () => {
            return <>TBD</>;
        },
    },
    la: {
        name: 'Latin',
        icon: () => {
            return <>TBD</>;
        },
    },
    lb: {
        name: 'Luxembourgish',
        icon: () => {
            return <>TBD</>;
        },
    },
    'map-bms': {
        name: 'Basa Banyumasan',
        icon: () => {
            return <>TBD</>;
        },
    },
    min: {
        name: 'Minangkabau',
        icon: () => {
            return <>TBD</>;
        },
    },
    mk: {
        name: 'Macedonian',
        icon: () => {
            return <>TBD</>;
        },
    },
    ml: {
        name: 'Malayalam',
        icon: () => {
            return <>TBD</>;
        },
    },
    mr: {
        name: 'Marathi',
        icon: () => {
            return <>TBD</>;
        },
    },
    ms: {
        name: 'Malay',
        icon: () => {
            return <>TBD</>;
        },
    },
    mwl: {
        name: 'Mirandese',
        icon: () => {
            return <>TBD</>;
        },
    },
    nl: {
        name: 'Dutch',
        icon: () => {
            return <>TBD</>;
        },
    },
    no: {
        name: 'Norwegian',
        icon: () => {
            return <>TBD</>;
        },
    },
    oc: {
        name: 'Occitan',
        icon: () => {
            return <>TBD</>;
        },
    },
    or: {
        name: 'Odia',
        icon: () => {
            return <>TBD</>;
        },
    },
    pl: {
        name: 'Polish',
        icon: () => {
            return <>TBD</>;
        },
    },
    ps: {
        name: 'Pashto',
        icon: () => {
            return <>TBD</>;
        },
    },
    pt: {
        name: 'Portuguese',
        icon: () => {
            return <>TBD</>;
        },
    },
    'pt-br': {
        name: 'Brazilian Portuguese',
        icon: () => {
            return <>TBD</>;
        },
    },
    ro: {
        name: 'Romanian',
        icon: () => {
            return <>TBD</>;
        },
    },
    ru: {
        name: 'Russian',
        icon: () => {
            return <>TBD</>;
        },
    },
    sc: {
        name: 'Sardinian',
        icon: () => {
            return <>TBD</>;
        },
    },
    sd: {
        name: 'Sindhi',
        icon: () => {
            return <>TBD</>;
        },
    },
    si: {
        name: 'Sinhala',
        icon: () => {
            return <>TBD</>;
        },
    },
    sl: {
        name: 'Slovenian',
        icon: () => {
            return <>TBD</>;
        },
    },
    sk: {
        name: 'Slovak',
        icon: () => {
            return <>TBD</>;
        },
    },
    sq: {
        name: 'Albanian',
        icon: () => {
            return <>TBD</>;
        },
    },
    sr: {
        name: 'Serbian',
        icon: () => {
            return <>TBD</>;
        },
    },
    so: {
        name: 'Somali',
        icon: () => {
            return <>TBD</>;
        },
    },
    sv: {
        name: 'Swedish',
        icon: () => {
            return <>TBD</>;
        },
    },
    ta: {
        name: 'Tamil',
        icon: () => {
            return <>TBD</>;
        },
    },
    tg: {
        name: 'Tajik',
        icon: () => {
            return <>TBD</>;
        },
    },
    th: {
        name: 'Thai',
        icon: () => {
            return <>TBD</>;
        },
    },
    tr: {
        name: 'Turkish',
        icon: () => {
            return <>TBD</>;
        },
    },
    uz: {
        name: 'Uzbek',
        icon: () => {
            return <>TBD</>;
        },
    },
    uk: {
        name: 'Ukrainian',
        icon: () => {
            return <>TBD</>;
        },
    },
    vi: {
        name: 'Vietnamese',
        icon: () => {
            return <>TBD</>;
        },
    },
    yue: {
        name: 'Cantonese',
        icon: () => {
            return <>TBD</>;
        },
    },
    yi: {
        name: 'Yiddish',
        icon: () => {
            return <>TBD</>;
        },
    },
    zh: {
        name: 'Chinese',
        icon: () => {
            return <>TBD</>;
        },
    },
    'zh-hans': {
        name: 'Simplified Chinese',
        icon: () => {
            return <>TBD</>;
        },
    },
    'zh-hant': {
        name: 'Traditional Chinese',
        icon: () => {
            return <>TBD</>;
        },
    },
    'zh-tw': {
        name: 'Chinese (Taiwan)',
        icon: () => {
            return <>TBD</>;
        },
    },
};

export default flags;
