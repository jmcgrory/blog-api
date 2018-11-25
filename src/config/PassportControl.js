import { Strategy, ExtractJwt } from 'passport-jwt';
// const config = require('../config/database');
var PassportControl = /** @class */ (function () {
    function PassportControl(passport) {
        var _this = this;
        this.setOptions = function (options) {
            _this.options = options;
        };
        this.use = function (passport) {
            passport.use(new Strategy(_this.options, function (payload, done) {
                // TODO: Placeholder implementation
                return done(null, { lol: 'okay' });
                // UserRoute.authenticate(payload._id, (err, user) => {
                //     if (err) {
                //         return done(err, false); // If Error
                //     } else if (user) {
                //         return done(null, user); // If Found
                //     } else {
                //         return done(null, false); // If Not Found
                //     }
                // });
            }));
        };
        this.setOptions({
            jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
            secretOrKey: process.env.DB_SECRET,
        });
        this.use(passport);
        return passport;
    }
    return PassportControl;
}());
export default PassportControl;
