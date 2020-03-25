import { Router } from 'express';
import validate from 'express-validation';

import { authLocal } from '../../services/auth.services';

import userValidations from './user.validations';
import * as userControllers from './user.controllers';

const routes = new Router();

routes.post(
    '/',
    validate(userValidations.signUp),
    userControllers.signUp
);

routes.post(
    '/login',
    authLocal,
    userControllers.login
);

export default routes;