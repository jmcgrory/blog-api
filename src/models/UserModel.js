import * as tslib_1 from "tslib";
import Model from './Model';
import { Schema } from 'mongoose';
var UserModel = /** @class */ (function (_super) {
    tslib_1.__extends(UserModel, _super);
    function UserModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.schema = new Schema({
            createdAt: {
                type: Date,
                // default: moment().format(), TODO: Err?
                required: true
            }
        });
        _this.params = new Map([]);
        return _this;
    }
    return UserModel;
}(Model));
export default UserModel;
