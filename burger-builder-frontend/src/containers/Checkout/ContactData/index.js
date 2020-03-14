import { connect } from 'react-redux';

import withErrorHandler from '../../../hoc/WithErrorHandler';
import axios from '../../../utils/axios';
import ContactData from './ContactData';
import * as actions from '../../Orders/actions';

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.orders.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        orderBurger: (orderData) => dispatch(actions.orderBurger(orderData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));