//************************//
//****  Dependencies  ****//
//************************//
import { JwtStrategy, ExtractJwt } from 'passport-jwt';
var PassportControl = /** @class */ (function () {
    function PassportControl(passport) {
        var _this = this;
        this.setOptions = function (options) {
            _this.options = options;
        };
        this.use = function () {
            _this.passport.use(new JwtStrategy(_this.options, 
            // TODO: Crack into payload with { _id }
            function (payload, done) {
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
            }));
        };
        this.setOptions({
            jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
            secretOrKey: process.env.DB_SECRET
        });
        this.use();
    }
    return PassportControl;
}());
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
