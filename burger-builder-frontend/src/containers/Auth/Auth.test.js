import reducer from './reducer';
import * as actionTypes from '../../utils/actionsTypes';

describe('auth reducer', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            loading: false,
            error: null,
            authRedirectPath: '/'
        });
    });

    it('should store token upon login', () => {
        expect(reducer({
            token: null,
            userId: null,
            loading: false,
            error: null,
            authRedirectPath: '/'
        }, {
            type: actionTypes.LOGIN_SUCCESS,
            token: 'JWT fsxfggfdgdfgd',
            userId: 'userId bla3'
        })).toEqual({
            token: 'JWT fsxfggfdgdfgd',
            userId: 'userId bla3',
            loading: false,
            error: null,
            authRedirectPath: '/'
        });
    });
});