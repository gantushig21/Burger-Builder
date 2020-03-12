
import { connect } from 'react-redux';

import Checkout from './Checkout';

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients
    }
}

export default connect(mapStateToProps)(Checkout);