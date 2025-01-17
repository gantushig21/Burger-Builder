import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';

let middlewares = [];

middlewares.push(thunk);

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : null;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares))
);

export { store };