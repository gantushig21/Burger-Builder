
import { connect } from 'react-redux';

import Checkout from './Checkout';

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        ordered: state.orders.ordered
    }
}

export default connect(mapStateToProps)(Checkout);