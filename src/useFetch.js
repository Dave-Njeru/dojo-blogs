// This is a custom hook
import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect hook runs everytime application renders. used for side effects (fetching, authentication)
    useEffect(() => {
        const abortCont = new AbortController();
        
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error('Could not fetch data :(');
                } else {
                    return response.json();
                }
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setIsLoading(false);
                    setError(err.message);
                }
            });
            return () => abortCont.abort();
    }, [url]); // add dependecies

    return { data, isLoading, error };
}

export default useFetch;

