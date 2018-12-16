import * as tslib_1 from "tslib";
import Route from '../Route';
import { UserModel } from '../../models';
import RouteMethod from '../RouteMethod';
import * as moment from 'moment';
import mongoose from 'mongoose';
import { ErrorNotice, SuccessNotice } from '../../notices';
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
            new RouteMethod('/authenticate', 'get', _this.getUserByUsername)
        ]; };
        _this.getRouterModel = function () { return new UserModel(User); };
        /**
         * @todo
         */
        _this.getUserByUsername = function (req, res, next) {
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
                            _this.model.updateUserToken(id_1, username, function (err, data) {
                                console.log(err, data);
                            });
                            res.json(new SuccessNotice('User verified successfully.'));
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
