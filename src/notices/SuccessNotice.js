import * as tslib_1 from "tslib";
import Notice from "./Notice";
var SuccessNotice = /** @class */ (function (_super) {
    tslib_1.__extends(SuccessNotice, _super);
    function SuccessNotice() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getCategory = function () { return 'success'; };
        return _this;
    }
    return SuccessNotice;
}(Notice));
export default SuccessNotice;
