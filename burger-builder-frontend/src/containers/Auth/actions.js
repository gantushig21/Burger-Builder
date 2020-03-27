import * as actionTypes from '../../utils/actionsTypes';
import axios from '../../utils/axios';

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: actionTypes.LOGOUT
            });
        }, expirationTime * 1000)
    }
}

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
            dispatch({
                type: actionTypes.SIGN_UP_FAILED,
                error: err.response.data.message
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
            dispatch(checkAuthTimeout(response.data.data.expiresIn));
        }).catch(err => {
            dispatch({
                type: actionTypes.LOGIN_FAILED
            });
        });
    }
}