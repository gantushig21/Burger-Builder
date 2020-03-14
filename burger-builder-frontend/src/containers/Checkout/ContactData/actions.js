import * as actionTypes from '../../../utils/actionsTypes';
import axios from '../../../utils/axios';

export const orderBurger = orderData => {
    return dispatch => {
        axios.post('/orders', orderData)
            .then(response => {
                dispatch({
                    type: actionTypes.ORDER_BURGER_SUCCESS,
                    orderId: response.data,
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