import { useState, useEffect } from 'react';

const CONTEXT_KEY = "3b7d248ed38f2a460";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAsxbk97IUSpBNQ6K5KhCxgq187amii0X0&cx=${CONTEXT_KEY}&q=${term}`)
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }
        fetchData()
    }, [term])
    return { data }
};

export default useGoogleSearch;