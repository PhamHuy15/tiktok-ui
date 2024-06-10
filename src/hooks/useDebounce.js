import { useEffect, useState } from 'react';

function useDebounce(Value, delay) {
    const [debounceValue, setDebounceValue] = useState(Value);

    useEffect(() => {
        const handle = setTimeout(() => setDebounceValue(Value), delay);

        return () => clearTimeout(handle);
    }, [Value]);

    return debounceValue;
}

export default useDebounce;
