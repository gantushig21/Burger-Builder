import { Router } from 'express';
import HTTPStatus from 'http-status';

import orderRoutes from './orders/order.routes';
import ingredientRoutes from './ingredients/ingredient.routes';
import userRoutes from './users/user.routes';

import logServiceError from '../utils/log';
import APIError from '../utils/error';

const routes = new Router();

routes.use('/v1/orders', orderRoutes);
routes.use('/v1/ingredients', ingredientRoutes);
routes.use('/v1/users', userRoutes);

routes.all("*", (req, res, next) =>
    next(new APIError("Not Found!", HTTPStatus.NOT_FOUND, true))
);

routes.use(logServiceError);

export default routes;