import { PassportStatic } from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import JwtStrategyOptions from './JwtStrategyOptions';
// const User = require('../models/User');
import { UserRoute } from '../routes';
// const config = require('../config/database');

class PassportControl {

    private options: JwtStrategyOptions;

    constructor(passport: PassportStatic) {
        this.setOptions({
            jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
            secretOrKey: process.env.DB_SECRET,
        });
        this.use(passport);
    }

    private setOptions = (options: JwtStrategyOptions) => {
        this.options = options;
    }

    private use = (passport: PassportStatic): void => {
        passport.use(new Strategy(
            this.options,
            (payload, done) => { // TODO: Maybe { _id }
                // TODO: Placeholder implementation
                UserRoute.authenticate(payload._id, (err, user) => {
                    if (err) {
                        return done(err, false); // If Error
                    } else if (user) {
                        return done(null, user); // If Found
                    } else {
                        return done(null, false); // If Not Found
                    }
                });
            }
        ))
    };

}

export default PassportControl;
