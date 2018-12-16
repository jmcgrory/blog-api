import * as tslib_1 from "tslib";
import Model from '../Model';
import * as bcrypt from 'bcrypt';
var UserModel = /** @class */ (function (_super) {
    tslib_1.__extends(UserModel, _super);
    function UserModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = new Map([]);
        _this.getUserByUsername = function (username, callback) {
            console.log(username);
            _this.model.findOne({ username: username }, 'password').exec(callback);
        };
        _this.generatePasswordHash = function (plainPassword, callback) {
            bcrypt.hash(plainPassword, 10, callback);
        };
        _this.comparePasswords = function (plainPassword, password, callback) {
            bcrypt.compare(plainPassword, password, callback);
        };
        return _this;
    }
    return UserModel;
}(Model));
export default UserModel;
