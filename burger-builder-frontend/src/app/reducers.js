import { combineReducers } from 'redux';

import burgerBuilderReducer from '../containers/BurgerBuilder/reducer';
import ordersReducer from '../containers/Orders/reducer';

export const reducers = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    orders: ordersReducer
});