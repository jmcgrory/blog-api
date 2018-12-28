import * as tslib_1 from "tslib";
import Route from '../Route';
import { UserModel } from '../../models';
import RouteMethod from '../RouteMethod';
import * as moment from 'moment';
import mongoose from 'mongoose';
import { ErrorNotice, SuccessNotice } from '../../notices';
import * as jwt from 'jsonwebtoken';
var schema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: moment.now(),
        required: true
    },
    updatedAt: {
        type: Date,
        default: null
    },
    deletedAt: {
        type: Date,
        default: null
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    token: {
        type: String
    }
}, {
    collection: 'user'
});
var User = mongoose.model('user', schema);
var UserRoute = /** @class */ (function (_super) {
    tslib_1.__extends(UserRoute, _super);
    function UserRoute() {
        var _this = _super.call(this) || this;
        _this.name = 'user';
        _this.useDefaultMethods = false;
        _this.getCustomRouteMethods = function () { return [
            new RouteMethod('/authenticate', 'get', _this.getUserByUsername),
            new RouteMethod('/token', 'get', _this.authenticateToken, true)
        ]; };
        _this.getRouterModel = function () { return new UserModel(User); };
        _this.authenticateUser = function (req, res, next) {
            // TODO: Use instead of getUserByUsername...
        };
        _this.authenticateToken = function (req, res, next) {
            _this.model.getUserByUsername(req.query.username, function (err, data) {
                if (err) {
                    res.json(new ErrorNotice('Authentication Error'));
                }
                else {
                    res.json(new SuccessNotice('User Authenticated'));
                }
            });
        };
        /**
         * @todo
         */
        _this.getUserByUsername = function (req, res, next) {
            console.log('[getUserByUsername]');
            var errorNotice = new ErrorNotice('Login credentials are incorrect.', 283723, 'One or more fields could not be verified.');
            var username = req.query.username;
            var password = req.query.password;
            _this.model.getUserByUsername(username, function (err, data) {
                if (err || !data) {
                    res.status(404).json(errorNotice.toObject());
                }
                else {
                    var id_1 = data._id;
                    _this.model.comparePasswords(password, data.password, function (err, data) {
                        if (err || !data) {
                            res.status(401).json(errorNotice.toObject());
                        }
                        else {
                            _this.model.updateUserToken(id_1, username, function (err, _a) {
                                var ok = _a.ok;
                                if (err || !ok) {
                                    res.status(500).json(errorNotice.toObject());
                                }
                                var newToken = jwt.sign({
                                    id: id_1,
                                    username: username
                                }, process.env.PASSPORT_SECRET);
                                res.json({
                                    token: newToken,
                                    username: username
                                });
                            });
                        }
                    });
                }
            });
        };
        _this.model = _this.getRouterModel();
        _this.bindRouteMethods();
        return _this;
    }
    UserRoute.base = '/user';
    return UserRoute;
}(Route));
export default UserRoute;
