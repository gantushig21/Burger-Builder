import { connect } from 'react-redux';

import BurgerBuilder from "./BurgerBuilder";
import withErrorHandler from '../../hoc/WithErrorHandler';
import axios from '../../utils/axios';
import * as actions from './actions';
import { orderInit } from '../Orders/actions';

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingredientName) => dispatch(actions.addIngredient(ingredientName)),
        onIngredientRemoved: (ingredientName) => dispatch(actions.removeIngredient(ingredientName)),
        getIngredients: () => dispatch(actions.getIngredients()),
        initOrder: () => dispatch(orderInit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
