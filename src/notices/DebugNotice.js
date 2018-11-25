import * as tslib_1 from "tslib";
import Notice from "./Notice";
var DebugNotice = /** @class */ (function (_super) {
    tslib_1.__extends(DebugNotice, _super);
    function DebugNotice() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getCategory = function () { return 'debug'; };
        return _this;
    }
    return DebugNotice;
}(Notice));
export default DebugNotice;
