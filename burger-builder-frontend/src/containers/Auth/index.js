import { connect } from 'react-redux';

import Auth from './Auth';

import * as actions from './actions';   

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (data) => dispatch(actions.login(data)),
        signUp: (data) => dispatch(actions.signUp(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);