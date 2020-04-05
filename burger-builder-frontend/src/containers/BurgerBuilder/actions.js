import * as actionTypes from '../../utils/actionsTypes';
import axios from '../../utils/axios';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

export const getIngredients = () => {
    return dispatch => {
        dispatch({
            type: actionTypes.GET_INGREDIENTS_PENDING,
        });
        axios.get('/ingredients').then(response => {
            dispatch({
                type: actionTypes.GET_INGREDIENTS_SUCCESS,
                ingredients: response.data
            });
        }).catch(err => {
            dispatch({
                type: actionTypes.GET_INGREDIENTS_FAILED,                
            });
        });
    }
}