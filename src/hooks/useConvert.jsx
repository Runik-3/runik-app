import { useEffect, useState } from 'react';
import convertDictionary from '../services/convertDictionary';
import fetchDictionary from '../services/fetchDictionary';

export default async function useConvert(library) {
    const [files, setFiles] = useState([]);
    const [status, setStatus] = useState('');

    const dict = await fetchDictionary(
        'http://ec2-18-144-45-206.us-west-1.compute.amazonaws.com:8000/api/dictionary/gameofthrones?lang=en&capacity=1000'
    );
    setFiles([...files, dict]);

    useEffect(async () => {
        if (files.length > 0) {
            // if files is empty, don't convert
            setStatus('Converting...');
            const convertedDict = await convertDictionary(
                'kobo',
                'xdxf',
                'test',
                files
            ).catch((error) => {
                throw new Error(error);
            });
            setDicts([...dicts, convertedDict]);
            setStatus('Dictionary converted... files ready to be installed');
            // document.querySelector('.install-btn').style.display = 'block';
        }
    }, [files]);
}
