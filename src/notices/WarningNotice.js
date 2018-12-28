import * as tslib_1 from "tslib";
import Notice from "./Notice";
var WarningNotice = /** @class */ (function (_super) {
    tslib_1.__extends(WarningNotice, _super);
    function WarningNotice() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getCategory = function () { return 'warning'; };
        return _this;
    }
    return WarningNotice;
}(Notice));
export default WarningNotice;
