import HTTPStatus from 'http-status';

import Ingredient from './ingredient.model';

export async function addIngredient(req, res) {
    try {
        let ingredient = await Ingredient.findOne({ type: req.body.type });

        if (ingredient)
            throw new Error("The ingredient is already in the list");

        ingredient = await Ingredient.create(req.body);

        return res.status(HTTPStatus.OK).json(ingredient);
    } catch (err) {
        return res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(err.message);
    }
}

export async function getIngredients(req, res) {
    try {
        let ingredients = await Ingredient.find();

        ingredients = ingredients.reduce((obj, ingredient) => {
            obj[ingredient.type] = ingredient.number
            return obj;
        }, {});

        return res.status(HTTPStatus.OK).json(ingredients);
    } catch (err) {
        return res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(err.message);
    }
}