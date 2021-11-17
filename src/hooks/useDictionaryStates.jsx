import { useState } from 'react';

export default function useDictionaryStates() {
    const [dicts, setDicts] = useState([]);
    const [convertedDicts, setConvertedDicts] = useState([]);
    const [status, setStatus] = useState();

    // takes in fandom list objects returns xdxf files -- passes file name and url through dictRef
    return {
        dicts,
        setDicts, // sets raw dict files from fandom object
        convertedDicts,
        setConvertedDicts, // sets dict converted from raw dict
        status,
        setStatus, // sets progress/status
    };
}
