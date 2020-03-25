import { connect } from 'react-redux';

import Auth from './Auth';

import * as actions from './actions';   

const mapDispatchToProps = dispatch => {
    return {
        login: (data) => dispatch(actions.login(data)),
        signUp: (data) => dispatch(actions.signUp(data))
    }
}

export default connect(null, mapDispatchToProps)(Auth);