import Joi from 'joi';

import {
    emailReg,
    engTextReg,
    textReg
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
            customer: Joi.object().keys({
                name: Joi.string()
                    .regex(textReg)
                    .required()
                    .error(functions.validationError),
                address: Joi.object().keys({
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
                        .error(functions.validationError)
                })
                    .required(),
                email: Joi.string()
                    .regex(emailReg)
                    .required()
                    .error(functions.validationError)
                
            })
                .required(),
            deliveryMethod: Joi.string()
                .regex(engTextReg)
                .required()
                .error(functions.validationError)
        }
    }
}