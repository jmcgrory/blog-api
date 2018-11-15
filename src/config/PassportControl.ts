import { PassportStatic } from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import JwtStrategyOptions from './JwtStrategyOptions';
// const User = require('../models/User');
// const config = require('../config/database');

class PassportControl {

    private options: JwtStrategyOptions;

    constructor(passport: PassportStatic) {

        this.setOptions({
            jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
            secretOrKey: process.env.DB_SECRET,
            audience: process.env.PP_AUDIENCE,
        });

        this.use(passport);

    }

    private setOptions = (options: JwtStrategyOptions) => {

        this.options = options;

    }

    private use = (passport: PassportStatic): void => {

        passport.use(new Strategy(

            this.options,

            // TODO: Crack into payload with { _id }
            (payload, done) => {

                // TODO: Placeholder
                return done(null, false);

                // User.getUserById(payload._id, (err, user) => {

                //     if (err) {

                //         return done(err, false);

                //     }

                //     if (user) {

                //         return done(null, user);

                //     } else {

                //         return done(null, false);

                //     }

                // });

            }

        ))
    };

}

export default PassportControl;
