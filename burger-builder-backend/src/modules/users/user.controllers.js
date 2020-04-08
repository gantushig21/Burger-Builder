import HTTPStatus from 'http-status';

import User from './user.model';
import messages from '../../utils/messages';
import constants from '../../config/constants';

export async function signUp(req, res) {
    const response = {
        status: messages.SUCCESS,
        data: null,
        message: null
    }

    try {
        if (req.body.password !== req.body.confirmPassword)
            throw new Error(messages.PASSWORDS_DONT_MATCH);

        const user = await User.findOne({
            email: req.body.email
        });
    
        if (!user) {
            const user = await User.create({
                email: req.body.email,
                password: req.body.password
            });

            response.data = {
                user,
                token: user.createToken()
            };    
        } else {
            response.status = messages.FAILED;
            response.message = messages.EMAIL_ALREADY_EXISTS;
        }

        return res.status(HTTPStatus.OK).json(response);
    } catch (err) {
        response.status = messages.ERROR;
        response.message = err.message;

        return res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(response);
    }
}

export async function login(req, res) {
    const response = {
        status: messages.SUCCESS,
        data: null,
        message: null
    }

    try {
        response.data = {
            user: req.user,
            token: req.user.createToken(),
            expiresIn: constants.USER_EXPIRATION_TIME
        }

        return res.status(HTTPStatus.OK).json(response);
    } catch (err) {
        response.status = messages.ERROR;
        response.message = err.message;

        return res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(response);
    }
}

export async function getInfo(req, res) {
    const response = {
        status: messages.SUCCESS,
        data: null,
        message: null
    };

    try {
        response.message = 'This is a private api';

        return res.status(HTTPStatus.OK).json(response);
    } catch (err) {
        response.status = messages.ERROR;
        response.message = err.message;

        return res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json(response);
    }
}