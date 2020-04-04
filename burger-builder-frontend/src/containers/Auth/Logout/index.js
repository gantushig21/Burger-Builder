import { connect } from 'react-redux';

import Logout from './Logout';

import * as actions from '../actions';

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout);