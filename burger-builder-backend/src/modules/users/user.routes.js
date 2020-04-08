import { Router } from 'express';
import validate from 'express-validation';

import { authLocal, authJwt } from '../../services/auth.services';

import userValidations from './user.validations';
import * as userControllers from './user.controllers';

const routes = new Router();

routes.post(
    '/sign-up',
    validate(userValidations.signUp),
    userControllers.signUp
);

routes.post(
    '/login',
    validate(userValidations.login),
    authLocal,
    userControllers.login
);

routes.get(
    '/',
    authJwt,
    userControllers.getInfo
);

export default routes;