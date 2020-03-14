import { connect } from 'react-redux';

import BurgerBuilder from "./BurgerBuilder";
import withErrorHandler from '../../hoc/WithErrorHandler';
import axios from '../../utils/axios';
import * as actions from './actions';

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        price: state.totalPrice,
        error: state.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingredientName) => dispatch(actions.addIngredient(ingredientName)),
        onIngredientRemoved: (ingredientName) => dispatch(actions.removeIngredient(ingredientName)),
        getIngredients: () => dispatch(actions.getIngredients())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
