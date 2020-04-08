import Joi from 'joi';

import { emailReg, passwordReg } from '../../utils/validations';
import functions from '../../utils/functions';

export default {
    signUp: {
        body: {
            email: Joi.string()
                .regex(emailReg)
                .required()
                .error(functions.validationError),
            password: Joi.string()
                .regex(passwordReg)
                .required()
                .error(functions.validationError),
            confirmPassword: Joi.string()
                .regex(passwordReg)
                .required()
                .error(functions.validationError)
        }
    },
    login: {
        body: {
            email: Joi.string()
                .regex(emailReg)
                .required()
                .error(functions.validationError),
            password: Joi.string()
                .regex(passwordReg)
                .required()
                .error(functions.validationError)
        }
    }
}