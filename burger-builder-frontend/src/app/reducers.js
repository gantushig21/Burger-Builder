import { combineReducers } from 'redux';

import burgerBuilderReducer from '../containers/BurgerBuilder/reducer';
import ordersReducer from '../containers/Orders/reducer';
import authReducer from '../containers/Auth/reducer';

export const reducers = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    orders: ordersReducer,
    auth: authReducer
});