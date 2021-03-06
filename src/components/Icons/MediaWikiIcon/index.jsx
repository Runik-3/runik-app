import * as React from 'react';

const SvgComponent = (props) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <svg xmlns="http://www.w3.org/2000/svg" width={88} height={31} {...props}>
        <defs>
            <linearGradient
                id="gradient-fill"
                x1={43.671}
                y1={0.188}
                x2={44.204}
                y2={30.688}
                gradientUnits="userSpaceOnUse"
            >
                <stop
                    id="stop4257"
                    offset={0}
                    style={{
                        stopColor: '#fff',
                        stopOpacity: 1,
                    }}
                />
                <stop
                    id="stop4259"
                    offset={1}
                    style={{
                        stopColor: '#ebebeb',
                        stopOpacity: 1,
                    }}
                />
            </linearGradient>
            <linearGradient
                id="gradient-stroke"
                x1={43.671}
                y1={0.188}
                x2={44.204}
                y2={30.688}
                gradientUnits="userSpaceOnUse"
            >
                <stop
                    id="stop4220"
                    offset={0}
                    style={{
                        stopColor: '#c8c8c8',
                        stopOpacity: 1,
                    }}
                />
                <stop
                    id="stop4222"
                    offset={1}
                    style={{
                        stopColor: '#787878',
                        stopOpacity: 1,
                    }}
                />
            </linearGradient>
            <linearGradient
                id="gradient"
                x1={4}
                x2={31}
                y1={28}
                y2={3}
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0%" stopColor="#0a00b2" />
                <stop offset="50%" stopColor="red" />
                <stop offset="100%" stopColor="#fffc00" />
            </linearGradient>
            <style>{'.petal{opacity:.65}'}</style>
        </defs>
        <path
            id="button"
            d="M4.96.2H82.9a4.78 4.78 0 0 1 4.78 4.78v20.94a4.78 4.78 0 0 1-4.78 4.78H4.96a4.78 4.78 0 0 1-4.78-4.78V4.98A4.78 4.78 0 0 1 4.96.2Z"
            style={{
                fill: 'url(#gradient-fill)',
                strokeWidth: 0.5,
                stroke: 'url(#gradient-stroke)',
            }}
        />
        <path
            id="wordmark"
            d="m41.748 22.96-.009-6.947h-.957l-2.443 4.6-2.488-4.6h-.959v6.947H36v-4.546l2.059 3.752h.521l2.059-3.811.009 4.6h1.1Zm5.9-2.62a3.179 3.179 0 0 0-.309-1.434A2.281 2.281 0 0 0 45.23 17.6a2.355 2.355 0 0 0-2.153 1.315 3.013 3.013 0 0 0-.318 1.394 2.966 2.966 0 0 0 .327 1.4 2.371 2.371 0 0 0 .926.968 2.937 2.937 0 0 0 2.5.129 2.039 2.039 0 0 0 .815-.645l-.6-.764a1.658 1.658 0 0 1-1.3.576 1.573 1.573 0 0 1-1.034-.342 1.471 1.471 0 0 1-.515-.928h3.75q.018-.238.018-.367Zm-2.418-1.747a1.257 1.257 0 0 1 .913.357 1.519 1.519 0 0 1 .439.933h-2.713a1.535 1.535 0 0 1 .452-.938 1.271 1.271 0 0 1 .909-.352Zm6.874-3v2.719a1.765 1.765 0 0 0-.671-.536 2.078 2.078 0 0 0-.868-.179 2.292 2.292 0 0 0-2.1 1.29 3.382 3.382 0 0 0 0 2.843 2.285 2.285 0 0 0 2.1 1.3 2.117 2.117 0 0 0 .9-.189 1.756 1.756 0 0 0 .685-.566v.685h1.074V15.6H52.1ZM50.7 21.967a1.329 1.329 0 0 1-.725-.2 1.41 1.41 0 0 1-.51-.581 2.123 2.123 0 0 1 0-1.747 1.413 1.413 0 0 1 .51-.581 1.393 1.393 0 0 1 1.45 0 1.413 1.413 0 0 1 .51.581 2.123 2.123 0 0 1 0 1.747 1.41 1.41 0 0 1-.51.581 1.329 1.329 0 0 1-.725.2Zm3.813.992h1.117v-5.3h-1.118v5.3Zm4.232-5.359a3.654 3.654 0 0 0-1.119.169 2.618 2.618 0 0 0-.9.486l.439.9a1.9 1.9 0 0 1 .658-.387 2.341 2.341 0 0 1 .792-.139 1.214 1.214 0 0 1 .891.3 1.151 1.151 0 0 1 .3.854v.079h-1.24a2.208 2.208 0 0 0-1.508.432 1.468 1.468 0 0 0-.479 1.146 1.548 1.548 0 0 0 .219.819 1.494 1.494 0 0 0 .622.566 2.059 2.059 0 0 0 .94.2 2.1 2.1 0 0 0 .917-.184 1.342 1.342 0 0 0 .586-.531v.65h1.057v-3.107a2.3 2.3 0 0 0-.559-1.692 2.185 2.185 0 0 0-1.616-.561Zm-.152 4.526a1.028 1.028 0 0 1-.671-.2.657.657 0 0 1-.242-.536q0-.7.967-.7H59.8v.61a1.139 1.139 0 0 1-.461.61 1.336 1.336 0 0 1-.747.213Zm11.734-6.114-1.6 5.31-1.584-5.31h-1.076l-1.62 5.28-1.557-5.28h-1.209l2.077 6.947H65l1.575-5.141 1.549 5.141h1.236l2.077-6.947h-1.11Zm1.817 6.947h1.119v-5.3h-1.119v5.3Zm6.015 0h1.36l-2.184-3.077 2-2.223h-1.346l-2.319 2.383V15.6h-1.118v7.36h1.118v-1.4l.832-.873Zm1.862 0h1.119v-5.3h-1.12v5.3Zm-24.945-6a.694.694 0 0 0 .515-.2.684.684 0 0 0 .2-.5.6.6 0 0 0-.206-.465.736.736 0 0 0-.51-.185.715.715 0 0 0-.51.194.669.669 0 0 0 0 .965.715.715 0 0 0 .51.194Zm17.632 0a.694.694 0 0 0 .515-.2.683.683 0 0 0 .2-.5.6.6 0 0 0-.206-.465.736.736 0 0 0-.51-.185.715.715 0 0 0-.51.194.669.669 0 0 0 0 .965.715.715 0 0 0 .51.194Zm7.876 0a.694.694 0 0 0 .515-.2.684.684 0 0 0 .2-.5.6.6 0 0 0-.206-.465.736.736 0 0 0-.51-.185.715.715 0 0 0-.51.194.669.669 0 0 0 0 .965.715.715 0 0 0 .51.194Z"
            style={{
                fill: '#000',
            }}
        />
        <path
            id="powered"
            d="M36.819 10.6a3.309 3.309 0 0 0 1.046-.151 2.125 2.125 0 0 0 .758-.425 1.8 1.8 0 0 0 .464-.65 2.127 2.127 0 0 0 .157-.83 2.205 2.205 0 0 0-.144-.826 1.65 1.65 0 0 0-.448-.635 2.072 2.072 0 0 0-.756-.407 3.583 3.583 0 0 0-1.073-.144H34.88v6.458h.927V10.6h1.013Zm-1.012-3.338h1.013a2.222 2.222 0 0 1 .659.088 1.255 1.255 0 0 1 .468.254 1.039 1.039 0 0 1 .279.4 1.472 1.472 0 0 1 .092.538 1.437 1.437 0 0 1-.1.536 1.119 1.119 0 0 1-.286.416 1.321 1.321 0 0 1-.47.27 1.981 1.981 0 0 1-.646.1h-1.009v-2.6Zm5.11 1.253a1.914 1.914 0 0 0-.693.47 2.082 2.082 0 0 0-.439.74 3.186 3.186 0 0 0 0 1.951 2.078 2.078 0 0 0 .439.742 1.912 1.912 0 0 0 .693.47 2.6 2.6 0 0 0 1.82 0 1.9 1.9 0 0 0 .688-.47 2.1 2.1 0 0 0 .437-.742 3.186 3.186 0 0 0 0-1.951 2.1 2.1 0 0 0-.437-.74 1.9 1.9 0 0 0-.688-.47 2.6 2.6 0 0 0-1.821 0Zm-.081 3.431a2.056 2.056 0 0 1-.326-1.242 2.068 2.068 0 0 1 .326-1.242 1.149 1.149 0 0 1 .992-.445 1.133 1.133 0 0 1 .981.445 2.079 2.079 0 0 1 .324 1.242 2.067 2.067 0 0 1-.324 1.242 1.138 1.138 0 0 1-.981.441 1.154 1.154 0 0 1-.993-.441Zm5.087 1.044h.644a.2.2 0 0 0 .194-.162l.994-3.011a1.893 1.893 0 0 0 .058-.217l.045-.218q.023.108.05.216t.062.215l.977 3.015a.18.18 0 0 0 .171.162h.675l1.476-4.567h-.644a.258.258 0 0 0-.155.047.253.253 0 0 0-.092.124l-.855 2.848q-.045.171-.079.329t-.061.315q-.036-.157-.077-.315t-.09-.328L48.3 8.576a.234.234 0 0 0-.085-.119.255.255 0 0 0-.157-.047h-.367a.235.235 0 0 0-.234.166l-.927 2.866-.095.329q-.045.158-.085.315-.027-.157-.059-.315t-.072-.328l-.841-2.849a.242.242 0 0 0-.088-.121.272.272 0 0 0-.169-.05h-.674Zm7.027-4.464a1.98 1.98 0 0 0-.675.479 2.114 2.114 0 0 0-.425.716 2.6 2.6 0 0 0-.149.889 3.1 3.1 0 0 0 .164 1.051 2.152 2.152 0 0 0 .457.765 1.924 1.924 0 0 0 .7.468 2.354 2.354 0 0 0 .875.16 3.187 3.187 0 0 0 .5-.04 2.616 2.616 0 0 0 .493-.128 2.282 2.282 0 0 0 .446-.22 1.587 1.587 0 0 0 .364-.322l-.243-.31a.171.171 0 0 0-.157-.081.371.371 0 0 0-.189.068q-.108.067-.263.149a2.3 2.3 0 0 1-.369.149 1.707 1.707 0 0 1-.511.067 1.545 1.545 0 0 1-.572-.1 1.139 1.139 0 0 1-.439-.306 1.482 1.482 0 0 1-.288-.515 2.519 2.519 0 0 1-.119-.729h3.015a.175.175 0 0 0 .16-.067.553.553 0 0 0 .043-.266 2.448 2.448 0 0 0-.144-.871 1.821 1.821 0 0 0-.4-.641 1.719 1.719 0 0 0-.608-.4 2.083 2.083 0 0 0-.765-.137 2.2 2.2 0 0 0-.901.172Zm1.393.542a1.03 1.03 0 0 1 .358.254 1.1 1.1 0 0 1 .223.387 1.53 1.53 0 0 1 .077.5h-2.427a1.552 1.552 0 0 1 .4-.9 1.341 1.341 0 0 1 1.368-.241Zm3.236 3.922v-2.866a2.764 2.764 0 0 1 .187-.4A1.264 1.264 0 0 1 58 9.426a.9.9 0 0 1 .295-.184 1.045 1.045 0 0 1 .376-.063 1.278 1.278 0 0 1 .272.027.961.961 0 0 0 .187.027.136.136 0 0 0 .144-.121l.059-.639a.692.692 0 0 0-.232-.1 1.217 1.217 0 0 0-.281-.032 1.147 1.147 0 0 0-.756.261 2.055 2.055 0 0 0-.531.715l-.054-.666a.307.307 0 0 0-.07-.18.279.279 0 0 0-.191-.05h-.49v4.569h.855Zm3.238-4.464a1.98 1.98 0 0 0-.675.479 2.114 2.114 0 0 0-.425.716 2.6 2.6 0 0 0-.149.889 3.1 3.1 0 0 0 .164 1.051 2.151 2.151 0 0 0 .457.765 1.924 1.924 0 0 0 .7.468 2.355 2.355 0 0 0 .875.16 3.186 3.186 0 0 0 .5-.04 2.617 2.617 0 0 0 .493-.128 2.282 2.282 0 0 0 .446-.22 1.591 1.591 0 0 0 .364-.322l-.243-.31a.171.171 0 0 0-.157-.081.371.371 0 0 0-.189.068q-.108.067-.263.149a2.3 2.3 0 0 1-.369.149 1.706 1.706 0 0 1-.511.067 1.545 1.545 0 0 1-.572-.1 1.139 1.139 0 0 1-.439-.306 1.484 1.484 0 0 1-.288-.515 2.519 2.519 0 0 1-.119-.729h3.015a.174.174 0 0 0 .16-.067.553.553 0 0 0 .038-.269 2.448 2.448 0 0 0-.144-.871 1.823 1.823 0 0 0-.4-.641 1.719 1.719 0 0 0-.608-.4 2.083 2.083 0 0 0-.765-.137 2.2 2.2 0 0 0-.898.175Zm1.393.542a1.029 1.029 0 0 1 .358.254 1.1 1.1 0 0 1 .223.387 1.53 1.53 0 0 1 .077.5H60.44a1.552 1.552 0 0 1 .4-.9 1.341 1.341 0 0 1 1.368-.241Zm6.19 3.922V6.353h-.855v2.511a1.565 1.565 0 0 0-1.233-.522 1.816 1.816 0 0 0-.823.182 1.847 1.847 0 0 0-.621.5 2.264 2.264 0 0 0-.391.754 3.162 3.162 0 0 0-.135.943 3.728 3.728 0 0 0 .121 1 2.136 2.136 0 0 0 .349.731 1.481 1.481 0 0 0 .544.448 1.632 1.632 0 0 0 .709.151 1.833 1.833 0 0 0 .454-.051 1.774 1.774 0 0 0 .4-.155 2.015 2.015 0 0 0 .355-.243 2.488 2.488 0 0 0 .311-.317l.076.536a.21.21 0 0 0 .225.171h.514Zm-2.529-.718a.862.862 0 0 1-.351-.293 1.471 1.471 0 0 1-.221-.511 3.162 3.162 0 0 1-.076-.747 2.094 2.094 0 0 1 .333-1.278 1.119 1.119 0 0 1 .95-.443 1.373 1.373 0 0 1 .567.115 1.234 1.234 0 0 1 .473.4V11.7a1.916 1.916 0 0 1-.531.493 1.275 1.275 0 0 1-.671.173 1.15 1.15 0 0 1-.473-.093Zm6.606.718a.2.2 0 0 0 .216-.18l.041-.392a1.741 1.741 0 0 0 .533.466 1.535 1.535 0 0 0 .754.169 1.831 1.831 0 0 0 .817-.178 1.762 1.762 0 0 0 .617-.5 2.343 2.343 0 0 0 .392-.778 3.478 3.478 0 0 0 .137-1.008 3.389 3.389 0 0 0-.119-.934 2.046 2.046 0 0 0-.344-.7 1.532 1.532 0 0 0-.547-.443 1.64 1.64 0 0 0-.722-.155 1.726 1.726 0 0 0-.826.194 2.251 2.251 0 0 0-.646.522v-2.72h-.856v6.637h.553Zm2.329-3.575a1.982 1.982 0 0 1 .295 1.2 2.2 2.2 0 0 1-.333 1.332 1.128 1.128 0 0 1-.959.441 1.351 1.351 0 0 1-.558-.115 1.246 1.246 0 0 1-.473-.4V9.7a1.962 1.962 0 0 1 .522-.5 1.241 1.241 0 0 1 .664-.173 1 1 0 0 1 .842.388Zm6.032-.992h-.679a.26.26 0 0 0-.153.047.249.249 0 0 0-.094.124l-1.143 2.781q-.041.1-.077.209t-.067.209a3.189 3.189 0 0 0-.121-.41l-1.183-2.79a.253.253 0 0 0-.257-.171h-.744l1.88 4.289-.837 1.813H78a.3.3 0 0 0 .194-.052.375.375 0 0 0 .1-.151Z"
            style={{
                fill: '#000',
            }}
        />
        <g
            id="petals"
            style={{
                fill: 'url(#gradient)',
            }}
        >
            <path
                className="petal"
                d="M13.068 7.359a3.865 3.865 0 0 0 1.132 2.665 2.989 2.989 0 0 0 1.973.787.919.919 0 0 0 .628-.281 3 3 0 0 0 .7-2.876C16.97 5.815 15.5 4.8 13.7 3.915a8.026 8.026 0 0 0-.632 3.444Z"
            />
            <path
                className="petal"
                d="M10.4 10.031a3.848 3.848 0 0 0 2.065 2.025 2.984 2.984 0 0 0 2.122-.031.923.923 0 0 0 .473-.5 3 3 0 0 0-.443-2.925c-1.2-1.493-2.94-1.869-4.942-1.991a8.024 8.024 0 0 0 .725 3.422Z"
            />
            <path
                className="petal"
                d="M8.959 13.524a3.831 3.831 0 0 0 2.68 1.076 2.99 2.99 0 0 0 1.949-.844.927.927 0 0 0 .246-.645 3 3 0 0 0-1.528-2.533c-1.675-.919-3.428-.6-5.324.06a8 8 0 0 0 1.977 2.886Z"
            />
            <path
                className="petal"
                d="M8.956 17.307a3.824 3.824 0 0 0 2.885-.035 3 3 0 0 0 1.479-1.529.928.928 0 0 0-.018-.691 2.981 2.981 0 0 0-2.376-1.752c-1.9-.2-3.394.766-4.9 2.1a7.954 7.954 0 0 0 2.93 1.907Z"
            />
            <path
                className="petal"
                d="M10.394 20.8a3.831 3.831 0 0 0 2.653-1.141 3.017 3.017 0 0 0 .784-1.981.926.926 0 0 0-.28-.631 2.971 2.971 0 0 0-2.863-.706c-1.831.54-2.844 2.013-3.722 3.824a7.927 7.927 0 0 0 3.428.635Z"
            />
            <path
                className="petal"
                d="M13.054 23.479A3.849 3.849 0 0 0 15.07 21.4a3.022 3.022 0 0 0-.031-2.132.922.922 0 0 0-.5-.476 2.97 2.97 0 0 0-2.914.449c-1.486 1.2-1.86 2.953-1.982 4.964a7.928 7.928 0 0 0 3.411-.726Z"
            />
            <path
                className="petal"
                d="M16.531 24.93a3.867 3.867 0 0 0 1.069-2.692 3.016 3.016 0 0 0-.841-1.958.918.918 0 0 0-.642-.248 2.978 2.978 0 0 0-2.517 1.535c-.914 1.683-.594 3.443.06 5.348a7.957 7.957 0 0 0 2.871-1.985Z"
            />
            <path
                className="petal"
                d="M20.3 24.933a3.873 3.873 0 0 0-.035-2.9 3 3 0 0 0-1.522-1.486.917.917 0 0 0-.687.018 2.993 2.993 0 0 0-1.745 2.387c-.2 1.906.763 3.409 2.093 4.918a8 8 0 0 0 1.896-2.937Z"
            />
            <path
                className="petal"
                d="M23.776 23.489a3.866 3.866 0 0 0-1.136-2.665 2.989 2.989 0 0 0-1.973-.788.919.919 0 0 0-.628.281 3 3 0 0 0-.7 2.876c.538 1.839 2 2.857 3.807 3.739a8.025 8.025 0 0 0 .63-3.443Z"
            />
            <path
                className="petal"
                d="M26.441 20.817a3.848 3.848 0 0 0-2.065-2.025 2.984 2.984 0 0 0-2.122.031.923.923 0 0 0-.473.5 3 3 0 0 0 .447 2.927c1.2 1.493 2.94 1.869 4.942 1.991a8.025 8.025 0 0 0-.729-3.424Z"
            />
            <path
                className="petal"
                d="M27.885 17.324a3.831 3.831 0 0 0-2.679-1.077 2.99 2.99 0 0 0-1.949.844.927.927 0 0 0-.246.645 3 3 0 0 0 1.528 2.533c1.675.919 3.428.6 5.324-.06a7.994 7.994 0 0 0-1.978-2.885Z"
            />
            <path
                className="petal"
                d="M27.888 13.541a3.824 3.824 0 0 0-2.888.035 3 3 0 0 0-1.479 1.529.928.928 0 0 0 .018.691 2.981 2.981 0 0 0 2.376 1.753c1.9.2 3.394-.767 4.9-2.1a7.955 7.955 0 0 0-2.927-1.908Z"
            />
            <path
                className="petal"
                d="M26.451 10.046a3.831 3.831 0 0 0-2.651 1.141 3.017 3.017 0 0 0-.784 1.982.927.927 0 0 0 .28.631 2.971 2.971 0 0 0 2.863.706c1.831-.54 2.844-2.013 3.722-3.824a7.926 7.926 0 0 0-3.43-.636Z"
            />
            <path
                className="petal"
                d="M23.791 7.369a3.849 3.849 0 0 0-2.016 2.074 3.022 3.022 0 0 0 .031 2.132.922.922 0 0 0 .5.476 2.97 2.97 0 0 0 2.914-.449c1.486-1.2 1.86-2.953 1.982-4.964a7.928 7.928 0 0 0-3.411.731Z"
            />
            <path
                className="petal"
                d="M20.313 5.918a3.867 3.867 0 0 0-1.072 2.692 3.016 3.016 0 0 0 .84 1.958.918.918 0 0 0 .642.248 2.978 2.978 0 0 0 2.522-1.536c.914-1.683.594-3.443-.06-5.348a7.958 7.958 0 0 0-2.872 1.986Z"
            />
            <path
                className="petal"
                d="M16.548 5.915a3.874 3.874 0 0 0 .035 2.9 3 3 0 0 0 1.522 1.485.917.917 0 0 0 .687-.018 2.993 2.993 0 0 0 1.745-2.387c.2-1.906-.763-3.409-2.093-4.918a8 8 0 0 0-1.896 2.938Z"
            />
        </g>
    </svg>
);

export default SvgComponent;
