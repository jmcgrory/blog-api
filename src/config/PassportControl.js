import { Strategy, ExtractJwt } from 'passport-jwt';
import { UserRoute } from '../routes';
/**
 * Configures Passport
 */
var PassportControl = /** @class */ (function () {
    function PassportControl(passport) {
        var _this = this;
        this.setOptions = function (options) {
            _this.options = options;
        };
        this.use = function (passport) {
            passport.use(new Strategy(_this.options, function (payload, done) {
                var router = new UserRoute();
                var model = router.getRouterModel();
                model.getModel(payload.id, function (err, user) {
                    console.log(err, user);
                    if (err) {
                        return done(err, false); // If Error
                    }
                    else if (user) {
                        return done(null, user); // If Found
                    }
                    else {
                        return done(null, false); // If Not Found
                    }
                });
            }));
        };
        this.setOptions({
            jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
            secretOrKey: process.env.PASSPORT_SECRET,
        });
        this.use(passport);
    }
    return PassportControl;
}());
export default PassportControl;
