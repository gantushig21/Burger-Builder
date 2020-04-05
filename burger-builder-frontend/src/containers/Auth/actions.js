import * as actionTypes from '../../utils/actionsTypes';
import axios from '../../utils/axios';

export const logout = () => {
    localStorage.removeItem('access-token');
    localStorage.removeItem('expiration-date');
    localStorage.removeItem('user-id');

    return {
        type: actionTypes.LOGOUT
    }
}

export const setAuthRedirectPath = path => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path
    }
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000)
    }
}

export const signUp = (data) => {
    return dispatch => {
        dispatch({
            type: actionTypes.SIGN_UP_PENDING
        });

        axios.post('/users/sign-up', data).then(response => {
            if (response.data.status === 'success') {
                localStorage.setItem("access-token", response.data.data.token);
                dispatch({
                    type: actionTypes.SIGN_UP_SUCCESS,
                    token: response.data.data.token,
                    userId: response.data.data.user._id
                });
            } else {
                dispatch(checkAuthTimeout(response.data.data.expiresIn));
            }
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
            if (response.data.status === 'success') {
                const expirationDate = new Date(new Date().getTime() + response.data.data.expiresIn * 1000);
                localStorage.setItem("access-token", response.data.data.token);
                localStorage.setItem("expiration-date", expirationDate);
                localStorage.setItem("user-id", response.data.data.user._id);
                dispatch({
                    type: actionTypes.LOGIN_SUCCESS,
                    token: response.data.data.token,
                    userId: response.data.data.user._id
                });
                dispatch(checkAuthTimeout(response.data.data.expiresIn));
            } else {
                throw new Error(response.data.message);
            }
        }).catch(err => {
            dispatch({
                type: actionTypes.LOGIN_FAILED
            });
        });
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('access-token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expiration-date'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('user-id');
                dispatch({
                    type: actionTypes.LOGIN_SUCCESS,
                    token: token,
                    userId: userId
                });
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    }
}