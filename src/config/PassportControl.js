import { Strategy, ExtractJwt } from 'passport-jwt';
// const User = require('../models/User');
// const config = require('../config/database');
var PassportControl = /** @class */ (function () {
    function PassportControl(passport) {
        var _this = this;
        this.setOptions = function (options) {
            _this.options = options;
        };
        this.use = function (passport) {
            passport.use(new Strategy(_this.options, 
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
            secretOrKey: process.env.DB_SECRET,
            audience: process.env.PP_AUDIENCE,
        });
        this.use(passport);
    }
    return PassportControl;
}());
export default PassportControl;
