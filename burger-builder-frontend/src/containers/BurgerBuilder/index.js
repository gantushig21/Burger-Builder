import { connect } from 'react-redux';

import BurgerBuilder from "./BurgerBuilder";
import withErrorHandler from '../../hoc/WithErrorHandler';
import * as actionTypes from '../../store/actions';
import axios from '../../utils/axios';

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        price: state.totalPrice
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingredientName) => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName }),
        onIngredientRemoved: (ingredientName) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
