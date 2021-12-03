/* eslint-disable react/jsx-props-no-spreading */
const flags = {
    en: {
        name: 'English',
        icon: (props) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={30}
                height={30}
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
            return <>{'   '}</>;
        },
    },
    ast: {
        name: 'Asturian',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    az: {
        name: 'Azerbaijani',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    bcc: {
        name: 'Southern Balochi',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    be: {
        name: 'Belarusian',
        icon: () => {
            return <>{'   '}</>;
        },
    },

    'be-tarask': {
        name: 'Belarusian (Taraškievica)',
        icon: () => {
            return <>{'   '}</>;
        },
    },

    bg: {
        name: 'Bulgarian',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    bn: {
        name: 'Bangla',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    br: {
        name: 'Breton',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    bs: {
        name: 'Bosnian',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    ca: {
        name: 'Catalan',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    ce: {
        name: 'Chechen',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    ckb: {
        name: 'Central Kurdish',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    cs: {
        name: 'Czech',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    da: {
        name: 'Danish',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    de: {
        name: 'German',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    diq: {
        name: 'Zazaki',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    el: {
        name: 'Greek',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    eo: {
        name: 'Esperanto',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    es: {
        name: 'Spanish',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    fa: {
        name: 'Persian',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    fi: {
        name: 'Finnish',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    fr: {
        name: 'French',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    gl: {
        name: 'Galician',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    gu: {
        name: 'Gujarati',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    he: {
        name: 'Hebrew',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    hi: {
        name: 'Hindi',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    hr: {
        name: 'Croatian',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    hu: {
        name: 'Hungarian',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    hy: {
        name: 'Armenian',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    id: {
        name: 'Indonesian',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    io: {
        name: 'Ido',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    is: {
        name: 'Icelandic',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    it: {
        name: 'Italian',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    ja: {
        name: 'Japanese',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    jv: {
        name: 'Javanese',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    ka: {
        name: 'Georgian',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    kk: {
        name: 'Kazakh',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    km: {
        name: 'Khmer',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    ko: {
        name: 'Korean',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    'ko-kp': {
        name: 'Korean (North Korea)',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    ksh: {
        name: 'Colognian',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    ku: {
        name: 'Kurdish',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    kw: {
        name: 'Cornish',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    la: {
        name: 'Latin',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    lb: {
        name: 'Luxembourgish',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    'map-bms': {
        name: 'Basa Banyumasan',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    min: {
        name: 'Minangkabau',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    mk: {
        name: 'Macedonian',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    ml: {
        name: 'Malayalam',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    mr: {
        name: 'Marathi',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    ms: {
        name: 'Malay',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    mwl: {
        name: 'Mirandese',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    nl: {
        name: 'Dutch',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    no: {
        name: 'Norwegian',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    oc: {
        name: 'Occitan',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    or: {
        name: 'Odia',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    pl: {
        name: 'Polish',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    ps: {
        name: 'Pashto',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    pt: {
        name: 'Portuguese',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    'pt-br': {
        name: 'Brazilian Portuguese',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    ro: {
        name: 'Romanian',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    ru: {
        name: 'Russian',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    sc: {
        name: 'Sardinian',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    sd: {
        name: 'Sindhi',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    si: {
        name: 'Sinhala',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    sl: {
        name: 'Slovenian',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    sk: {
        name: 'Slovak',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    sq: {
        name: 'Albanian',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    sr: {
        name: 'Serbian',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    so: {
        name: 'Somali',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    sv: {
        name: 'Swedish',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    ta: {
        name: 'Tamil',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    tg: {
        name: 'Tajik',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    th: {
        name: 'Thai',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    tr: {
        name: 'Turkish',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    uz: {
        name: 'Uzbek',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    uk: {
        name: 'Ukrainian',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    vi: {
        name: 'Vietnamese',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    yue: {
        name: 'Cantonese',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    yi: {
        name: 'Yiddish',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    zh: {
        name: 'Chinese',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    'zh-hans': {
        name: 'Simplified Chinese',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    'zh-hant': {
        name: 'Traditional Chinese',
        icon: () => {
            return <>{'   '}</>;
        },
    },
    'zh-tw': {
        name: 'Chinese (Taiwan)',
        icon: () => {
            return <>{'   '}</>;
        },
    },
};

export default flags;
