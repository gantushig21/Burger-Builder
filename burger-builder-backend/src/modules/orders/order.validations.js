import Joi from 'joi';

import {
    emailReg,
    engTextReg
} from '../../utils/validations';

export default {
    orderBurger: {
        body: {
            ingredients: {
                salad: Joi.string()
                    .required()
            },
            price: Joi.number()
                .required(),
            deliveryMethod: Joi.string()
                .regex(engTextReg)
                .required()
                .error(errs => {
                    errs.forEach(err => {
                        switch (err.type) {
                            case 'string.regex.base':
                                err.message = 'wrong value';
                                break;
                            default: 
                                break;
                        }
                    });

                    return errs;
                })
        }
    }
}