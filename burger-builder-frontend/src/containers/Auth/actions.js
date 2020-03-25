import * as actionTypes from '../../utils/actionsTypes';
import axios from '../../utils/axios';

export const signUp = (data) => {
    return dispatch => {
        dispatch({
            type: actionTypes.SIGN_UP_PENDING
        });

        axios.post('/users/sign-up', data).then(response => {
            dispatch({
                type: actionTypes.SIGN_UP_SUCCESS,
                token: response.data.data.token,
                userId: response.data.data.user._id
            });
        }).catch(err => {
            console.log("Failed: ", err);
            dispatch({
                type: actionTypes.SIGN_UP_FAILED
            });
        });
    }
}

export const login = (data) => {
    return dispatch => {
        dispatch({
            type: actionTypes.LOGIN_PENDING
        });

        axios.post('/users/login', data).then(response => {
            dispatch({
                type: actionTypes.LOGIN_SUCCESS,
                token: response.data.data.token,
                userId: response.data.data.user._id
            });
        }).catch(err => {
            console.log("Failed: ", err);
            dispatch({
                type: actionTypes.LOGIN_FAILED
            });
        });
    }
}