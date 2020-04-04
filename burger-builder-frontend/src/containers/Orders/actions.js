import * as actionTypes from '../../utils/actionsTypes';
import axios from '../../utils/axios';

export const orderBurger = (orderData, token) => {
    return dispatch => {
        dispatch({
            type: actionTypes.ORDER_BURGER_PENDING
        });

        axios({
            method: 'post',
            url: '/orders', 
            data: orderData,
            headers: {
                Authorization: token
            }
        }).then(response => {
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
        dispatch({
            type: actionTypes.GET_ORDERS_PENDING
        });

        axios({
            method: 'get',
            url: '/orders',
            headers: {
                Authorization: token
            }
        }).then(response => {
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