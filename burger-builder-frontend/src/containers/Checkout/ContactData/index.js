import { connect } from 'react-redux';

import withErrorHandler from '../../../hoc/WithErrorHandler';
import ContactData from './ContactData';
import * as actions from './actions';

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        price: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        orderBurger: (orderData) => dispatch(actions.orderBurger(orderData))
    }
}

export default connect(mapStateToProps)(withErrorHandler(ContactData));