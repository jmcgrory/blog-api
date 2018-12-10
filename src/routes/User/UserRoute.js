import * as tslib_1 from "tslib";
import Route from '../Route';
import { UserModel } from '../../models';
import * as moment from 'moment';
import mongoose from 'mongoose';
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
        type: String,
        required: true,
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
        _this.getRouterModel = function () { return new UserModel(User); };
        _this.model = _this.getRouterModel();
        return _this;
    }
    UserRoute.base = '/user';
    /**
     * @todo
     */
    UserRoute.authenticate = function (id, callback) {
        return Promise.resolve({ lol: 'data' });
    };
    return UserRoute;
}(Route));
export default UserRoute;
