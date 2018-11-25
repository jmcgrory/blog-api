import * as tslib_1 from "tslib";
import Route from '../Route';
import { UserModel } from '../../models';
var UserRoute = /** @class */ (function (_super) {
    tslib_1.__extends(UserRoute, _super);
    function UserRoute() {
        var _this = _super.call(this) || this;
        _this.useDefaultMethods = false;
        _this.getRouterModel = function () { return new UserModel(); };
        _this.model = _this.getRouterModel();
        return _this;
    }
    UserRoute.base = '/user';
    UserRoute.authenticate = function (id, callback) {
        return Promise.resolve({ lol: 'data' });
    };
    return UserRoute;
}(Route));
export default UserRoute;
