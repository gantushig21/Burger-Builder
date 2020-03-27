import * as actionTypes from '../../utils/actionsTypes';
import axios from '../../utils/axios';

export const orderBurger = orderData => {
    return dispatch => {
        dispatch({
            type: actionTypes.ORDER_BURGER_PENDING
        });

        axios.post('/orders', orderData)
            .then(response => {
                dispatch({
                    type: actionTypes.ORDER_BURGER_SUCCESS,
                    orderId: response.data._id,
                    orderData: orderData
                })
            })
            .catch(error => {
                dispatch({
                    type: actionTypes.ORDER_BURGER_FAILED,
                    error
                });
            });
    }
}

export const orderInit = () => {
    return {
        type: actionTypes.ORDER_INIT
    }
}

export const getOrders = (token) => {
    return dispatch => {
        console.log(token);
        dispatch({
            type: actionTypes.GET_ORDERS_PENDING
        });

        axios.get('/orders').then(response => {
            dispatch({
                type: actionTypes.GET_ORDERS_SUCCESS,
                orders: response.data
            });
        }).catch(error => {
            dispatch({
                type: actionTypes.GET_ORDERS_FAILED,
                error
            });
        });
    }
}