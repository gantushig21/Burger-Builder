import passport from 'passport';
import LocalStrategy from 'passport-local';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';

import constants from '../config/constants';

import User from '../modules/users/user.model';

const localOpts = {
    usernameField: 'email'
};

const localStrategy = new LocalStrategy(localOpts, async (email, password, done) => {
    try {
        const user = await User.findOne({
            email
        });

        if (!user) {
            return done(null, false);
        } else if (!user.authenticateUser(password)) {
            return done(null, false);
        }

        return done(null, user);
    } catch (err) {
        return done(e, false);
    }
});

const jwtOpts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
    secretOrKey: constants.JWT_SECRET
}

const jwtStrategy = new JWTStrategy(jwtOpts, async (payload, done) => {
    try {
        const user = await User.findById(payload._id)

        if (!user) {
            return done(null, false);
        }

        return done(null, user);
    } catch (err) {
        return done(err, false);
    }
});

passport.use('localLogin', localStrategy);
passport.use('jwtLogin', jwtStrategy);

export const authLocal = passport.authenticate('localLogin', { session: false });
export const authJwt = passport.authenticate('jwtLogin', { session: false });