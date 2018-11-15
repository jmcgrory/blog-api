//************************//
//****  Dependencies  ****//
//************************//

// Bring in specific parts of ppJWT and our user model/config files

// const JwtStrategy = require('passport-jwt').Strategy;
// const ExtractJwt = require('passport-jwt').ExtractJwt;

// const User = require('../models/User');
// const config = require('../config/database');

import { PassportStatic } from 'passport';
import { JwtStrategy, ExtractJwt } from 'passport-jwt';

interface JwtStrategyOptions {
    jwtFromRequest: any;
    secretOrKey: string;
}

class PassportControl {

    private options: JwtStrategyOptions;

    private passport: PassportStatic;

    constructor(passport: PassportStatic) {

        this.setOptions({
            jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
            secretOrKey: process.env.DB_SECRET
        });

        this.use();

    }

    private setOptions = (options: JwtStrategyOptions) => {

        this.options = options;

    }

    private use = (): void => {

        this.passport.use(new JwtStrategy(

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

//************************//
//****     Export     ****//
//************************//
/*
// Export our router!
module.exports = (passport) => {

    // Define options for strategy
    let opts = {};

    // Set our method of getting the auth data
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');

    // Set our key/secret to our db secret
    opts.secretOrKey = config.secret;

    // Create new instance, callback to our User model function with data
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {

        User.getUserById(jwt_payload._id, (err, user) => {

            if (err) {

                return done(err, false);

            }

            if (user) {

                return done(null, user);

            } else {

                return done(null, false);

            }

        });

    }));

};
*/