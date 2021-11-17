/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { LibraryProvider } from '../context/libraryContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <LibraryProvider>
            <Component {...pageProps} />
        </LibraryProvider>
    );
}

export default MyApp;
