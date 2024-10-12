import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState('');

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => clearTimeout(timeOut);
    }, [value]);

    return debounceValue;
}

export default useDebounce;
