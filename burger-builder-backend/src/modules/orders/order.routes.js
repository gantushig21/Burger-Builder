import { Router } from 'express';
import validate from 'express-validation';

import { authJwt } from '../../services/auth.services';
import orderValidations from './order.validations';
import * as orderControllers from './order.controllers';

const routes = new Router();

routes.get(
    '/', 
    authJwt,
    orderControllers.getOrders
);

routes.post(
    '/', 
    authJwt,
    validate(orderValidations.orderBurger), 
    orderControllers.orderBurger
);

export default routes;