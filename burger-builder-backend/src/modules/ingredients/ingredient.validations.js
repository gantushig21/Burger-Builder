import Joi from 'joi';

import {
    engTextReg
} from '../../utils/validations';

import functions from '../../utils/functions';

export default {
    addIngredient: {
        body: {
            type: Joi.string()
                .regex(engTextReg)
                .required()
                .error(functions.validationError)
        }
    }
}