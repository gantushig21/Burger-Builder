import * as actionType from '../../utils/actionsTypes';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false,
    loading: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};  

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_INGREDIENT: 
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
                building: true
            }
        case actionType.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
                building: true
            }
        case actionType.GET_INGREDIENTS_PENDING: 
            return {
                ...state,
                loading: true
            }
        case actionType.GET_INGREDIENTS_SUCCESS: 
            return {
                ...state,
                ingredients: action.ingredients,
                totalPrice: 4,
                error: false,
                building: false,
                loading: false
            }
        case actionType.GET_INGREDIENTS_FAILED: {
            return {
                ...state,
                error: true,
                loading: false
            }
        }
        default: {
            return state;
        }
    }
} 

export default reducer;