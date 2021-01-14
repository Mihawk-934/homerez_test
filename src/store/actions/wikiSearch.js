import * as actionTypes from './actionTypes';
import axios from 'axios';

export const inputValue = (inputValue) => {
    return {
        type: actionTypes.INPUT_VALUE,
        inputValue: inputValue
    }
};

export const result = (result) => {
    return {
        type: actionTypes.RESULT,
        result: result
    }
}

export const liked = (liked) => {
    return {
        type: actionTypes.LIKED,
        liked: liked
    }
}

export const fecthValue = (inputValue) => {
    return dispatch => {
        axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${inputValue}`)
        .then(response => {
            const data = { 
                            title: response.data.title,
                            description: response.data.description,
                            extract: response.data.extract
                         };
            dispatch(result(data));
        })
        .catch(err => {
            console.log(err);
        })
    }
}