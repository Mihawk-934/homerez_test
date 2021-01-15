import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    inputValue: localStorage.getItem('inputValue') || '',
    result: JSON.parse(localStorage.getItem('result')) || null,
    liked: JSON.parse(localStorage.getItem('liked')) || []
}

const inputValue = (state, action) => {
    localStorage.setItem('inputValue', action.inputValue);
    return updateObject( state, {
        inputValue: action.inputValue
    });
}

const result = (state, action) => {
    localStorage.setItem('result', JSON.stringify(action.result));
    return updateObject( state, {
        result: action.result
    });
}

const liked = (state, action) => {
    const newTab = [...state.liked];
    newTab.push(action.liked);
    const uniqueNames = Array.from(new Set(newTab));
    
    localStorage.setItem('liked', JSON.stringify(uniqueNames));

    return updateObject( state, {
        liked: uniqueNames
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INPUT_VALUE: return inputValue(state, action);
        case actionTypes.RESULT: return result(state, action);
        case actionTypes.LIKED: return liked(state, action);
            default: return state;
    }
};
  
export default reducer;