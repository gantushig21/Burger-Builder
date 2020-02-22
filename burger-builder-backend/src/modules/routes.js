import { Router } from 'express';
import HTTPStatus from 'http-status';

import orderRoutes from './orders/order.routes';

import logServiceError from '../utils/log';
import APIError from '../utils/error';

const routes = new Router();

routes.use('/v1/orders', orderRoutes);

routes.all("*", (req, res, next) =>
    next(new APIError("Not Found!", HTTPStatus.NOT_FOUND, true))
);

routes.use(logServiceError);

export default routes;