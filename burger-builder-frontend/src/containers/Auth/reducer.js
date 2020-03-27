import * as actionType from '../../utils/actionsTypes';

const initialState = {
    token: null,
    userId: null,
    loading: false,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SIGN_UP_PENDING: 
            return {
                ...state,
                loading: true
            }

        case actionType.SIGN_UP_SUCCESS:
            return {
                ...state,
                loading: false,
                userId: action.userId,
                token: action.token,
                error: null
            }

        case actionType.SIGN_UP_FAILED: 
            return {
                ...state,
                loading: false,
                error: action.error
            }

        case actionType.LOGIN_PENDING:
            return {
                ...state,
                loading: true
            }

        case actionType.LOGIN_SUCCESS: 
            return {
                ...state,
                loading: false,
                userId: action.userId,
                token: action.token,
                error: null
            }

        case actionType.LOGIN_FAILED: 
            return {
                ...state,
                loading: false,
                error: action.error
            }

        case actionType.LOGOUT: 
            return {
                ...state,
                token: null,
                userId: null
            }

        default: 
            return state;
    }
}

export default reducer;