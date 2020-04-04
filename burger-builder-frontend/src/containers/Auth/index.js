import { connect } from 'react-redux';

import Auth from './Auth';

import * as actions from './actions';   
import { setAuthRedirectPath } from '../Auth/actions';

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        buildingBurger: state.burgerBuilder.building,
        authRedirectPath: state.auth.authRedirectPath
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (data) => dispatch(actions.login(data)),
        signUp: (data) => dispatch(actions.signUp(data)),
        setAuthRedirectPath: (path) => dispatch(setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);