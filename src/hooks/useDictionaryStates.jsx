import { useState, useContext } from 'react';
import { LibraryContext } from '../context/libraryContext';
import convertDictionary from '../services/convertDictionary';
import fetchDictionary from '../services/fetchDictionary';

export default function useDictionaryStates() {
    const [dicts, setDicts] = useState([]);
    const [convertedDicts, setConvertedDicts] = useState([]);
    const [status, setStatus] = useState(['test']);

    // takes in fandom list objects returns xdxf files -- passes file name and url through dictRef

    return {
        dicts,
        setDicts,
        convertedDicts,
        setConvertedDicts,
        status,
        setStatus,
    };
}
