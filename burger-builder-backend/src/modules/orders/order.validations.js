import Joi from 'joi';

import {
    emailReg,
    engTextReg,
    textReg,
    idReg
} from '../../utils/validations';

import functions from '../../utils/functions';

export default {
    orderBurger: {
        body: {
            ingredients: Joi.object().keys({
                salad: Joi.number()
                    .required(),
                cheese: Joi.number()
                    .required(),
                meat: Joi.number()
                    .required(),
                bacon: Joi.number()
                    .required()
            })
                .required(),
            price: Joi.number()
                .required(),
            userId: Joi.string()
                .regex(idReg)
                .required(),
            orderData: Joi.object().keys({
                name: Joi.string()
                    .regex(textReg)
                    .required()
                    .error(functions.validationError),
                street: Joi.string()
                    .regex(textReg)
                    .required()
                    .error(functions.validationError),
                zipCode: Joi.string()
                    .regex(textReg)
                    .required()
                    .error(functions.validationError),
                country: Joi.string()
                    .regex(textReg)
                    .required()
                    .error(functions.validationError),
                email: Joi.string()
                    .regex(emailReg)
                    .required()
                    .error(functions.validationError),
                deliveryMethod: Joi.string()
                    .regex(engTextReg)
                    .required()
                    .error(functions.validationError)
                })
                    .required(),
        }
    }
}