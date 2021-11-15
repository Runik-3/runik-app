import { useState } from 'react';

export default function useDictionaryStates() {
    const [dicts, setDicts] = useState([]);
    const [convertedDicts, setConvertedDicts] = useState([]);
    const [status, setStatus] = useState(['test']);
    const [targetDevice, setTargetDevice] = useState('');

    // takes in fandom list objects returns xdxf files -- passes file name and url through dictRef

    return {
        dicts,
        setDicts,
        convertedDicts,
        setConvertedDicts,
        status,
        setStatus,
        targetDevice,
        setTargetDevice,
    };
}
