import * as tslib_1 from "tslib";
import Notice from "./Notice";
var ErrorNotice = /** @class */ (function (_super) {
    tslib_1.__extends(ErrorNotice, _super);
    function ErrorNotice() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getCategory = function () { return 'error'; };
        return _this;
    }
    return ErrorNotice;
}(Notice));
export default ErrorNotice;
