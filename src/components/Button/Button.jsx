import React from 'react';
import * as actions from '../../store/actions/index';
import { useSelector, useDispatch } from 'react-redux';
import './Button.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Button = (props) => {

    const dispatch = useDispatch();
    const inputValue = useSelector(state => state.wikiSearch.inputValue);
    const result = useSelector(state => state.wikiSearch.result);

    const searchRequest = () => {
        dispatch(actions.fecthValue(inputValue));
    }

    const liked = () => {
        dispatch(actions.liked(result?.title));

        toast.info('Add to your likes !', {
            autoClose: 2000,
            closeButton: false,
        })
    }

    return (
        <>
            <ToastContainer />
            <button 
                className={props.color}
                onClick={props.title ==='SEARCH' ? searchRequest : liked}
                >
                {props.title}
            </button>
        </>
    )
}
   
export default Button;