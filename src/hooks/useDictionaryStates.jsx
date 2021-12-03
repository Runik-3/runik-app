import { useState } from 'react';

export default function useDictionaryStates() {
    const [dicts, setDicts] = useState([]);
    const [convertedDicts, setConvertedDicts] = useState([]);
    const [status, setStatus] = useState();
    const [inDb, setInDb] = useState(false);
    const [installFlow, setInstallFlow] = useState();
    const [downloads, setDownloads] = useState([]);

    // takes in fandom list objects returns xdxf files -- passes file name and url through dictRef
    return {
        dicts,
        setDicts, // sets raw dict files from fandom object
        convertedDicts,
        setConvertedDicts, // sets dict converted from raw dict
        status,
        setStatus, // sets progress/status
        inDb,
        setInDb,
        installFlow,
        setInstallFlow, // sets user flow type between install and download
        downloads,
        setDownloads, // set array of names and links
    };
}
