import * as actionTypes from '../../utils/actionsTypes';

const initialState = {
    orders: [],
    loading: false,
    ordered: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ORDER_INIT: 
            return {
                ...state,
                ordered: false
            }
        case actionTypes.ORDER_BURGER_PENDING: 
            return {
                ...state,
                loading: true
            }
        case actionTypes.ORDER_BURGER_SUCCESS: 
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            }
            return {
                ...state,
                loading: false,
                orders: state.orders.concat(newOrder),
                ordered: true
            }
        case actionTypes.ORDER_BURGER_FAILED: 
            return {
                ...state,
                loading: false
            }        
        case actionTypes.GET_ORDERS_PENDING: 
            return {
                ...state,
                loading: false
            }

        case actionTypes.GET_ORDERS_SUCCESS: 
            return {
                ...state,
                loading: false,
                orders: action.orders
            }

        case actionTypes.GET_ORDERS_FAILED: 
            return {
                ...state,
                loading: false
            }
        default: {
            return state;
        }
    }
}

export default reducer;