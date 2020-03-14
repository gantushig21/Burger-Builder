import * as actionTypes from '../../../utils/actionsTypes';

const initialState = {
    orders: [],
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ORDER_BURGER_SUCCESS: 
            const newOrder = {
                ...action.orderData,
                id: action.id
            }
            return {
                ...state,
                loading: false,
                orders: state.orders.concat(newOrder)
            }
        case actionTypes.ORDER_BURGER_FAILED: 
            return {
                ...state,
                loading: false
            }
        
        default: 
            return state;
    }
}