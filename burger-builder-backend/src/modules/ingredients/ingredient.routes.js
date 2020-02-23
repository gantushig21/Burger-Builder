import { Router } from 'express';

import validate from 'express-validation';

import ingredientValidations from './ingredient.validations';
import * as ingredientControllers from './ingredient.controllers';

const routes = new Router();

routes.get(
    '/', 
    ingredientControllers.getIngredients
);

routes.post(
    '/', 
    validate(ingredientValidations.addIngredient), 
    ingredientControllers.addIngredient
);

export default routes;