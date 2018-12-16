import * as tslib_1 from "tslib";
import Model from '../Model';
import * as bcrypt from 'bcrypt';
var UserModel = /** @class */ (function (_super) {
    tslib_1.__extends(UserModel, _super);
    function UserModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = new Map([]);
        _this.getUserByUsername = function (username, callback) {
            _this.model.findOne({ username: username }, 'password').exec(callback);
        };
        _this.generatePasswordHash = function (plainPassword, callback) {
            bcrypt.hash(plainPassword, 10, callback);
        };
        _this.comparePasswords = function (plainPassword, password, callback) {
            bcrypt.compare(plainPassword, password, callback);
        };
        _this.updateUserToken = function (id, newToken, callback) {
            _this.update(id, { token: newToken }, callback);
        };
        return _this;
    }
    return UserModel;
}(Model));
export default UserModel;
