import { connect } from 'react-redux';

import Layout from "./Layout";

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps, null)(Layout);
