import { connect } from 'react-redux';

import Orders from './Orders';
import * as actions from './actions';
import axios from '../../utils/axios';
import withErrorHandler from '../../hoc/WithErrorHandler';

const mapStateToProps = state => {
    return  {
        orders: state.orders.orders,
        loading: state.orders.loading,
        token: state.auth.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getOrders: (token) => dispatch(actions.getOrders(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));