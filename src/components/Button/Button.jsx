import React from 'react';
import * as actions from '../../store/actions/index';
import { useSelector, useDispatch } from 'react-redux';
import './Button.css';

const Button = (props) => {

    const dispatch = useDispatch();
    const inputValue = useSelector(state => state.wikiSearch.inputValue);
    const result = useSelector(state => state.wikiSearch.result);

    const searchRequest = () => {
        dispatch(actions.fecthValue(inputValue));
    }

    const liked = () => {
        dispatch(actions.liked(result?.title));
    }

    return (
        <button 
            className={props.color}
            onClick={props.title ==='SEARCH' ? searchRequest : liked}
            >
            {props.title}
        </button>
    )
}
   
export default Button;