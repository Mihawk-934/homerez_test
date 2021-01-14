import React from 'react';
import { useSelector } from 'react-redux';
import './SearchResult.css';

const SearchResult = () => {
    
    const result = useSelector(state => state.wikiSearch.result);

    return (
        <div>
            {result?.title && <p className="results">Results</p>}
            {result?.title && <hr/>}
            <h1 className="result__title">{result?.title}</h1>
            <h3 className="result__description">{result?.description}</h3>
            <p>{result?.extract}</p>
        </div>
    )
}

export default SearchResult;