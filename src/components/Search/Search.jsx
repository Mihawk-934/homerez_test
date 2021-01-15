import React from 'react';
import * as actions from '../../store/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import './Search.css';

const Search = () => {
    
    const dispatch = useDispatch();

    const inputValue = useSelector(state => state.wikiSearch.inputValue);

    const handleChange = (e) => {
        dispatch(actions.inputValue(e.target.value));
    }

    return (
        <div className="search">
            <p className="search__title">Page title</p>
            <input
                defaultValue={inputValue}
                className="search__input"
                placeholder="Try “Paris” or “Marseille”"
                onChange={handleChange} />
        </div>
    )
}

export default Search;