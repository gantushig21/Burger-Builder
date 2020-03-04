import { Router } from 'express';

import validate from 'express-validation';

import orderValidations from './order.validations';
import * as orderControllers from './order.controllers';

const routes = new Router();

routes.get('/', orderControllers.getOrders);
routes.post('/', validate(orderValidations.orderBurger), orderControllers.orderBurger);

export default routes;