import { connect } from 'react-redux';

import Orders from './Orders';
import * as actions from './actions';
import axios from '../../utils/axios';
import withErrorHandler from '../../hoc/WithErrorHandler';

const mapStateToProps = state => {
    return  {
        orders: state.orders.orders,
        loading: state.orders.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getOrders: () => dispatch(actions.getOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));