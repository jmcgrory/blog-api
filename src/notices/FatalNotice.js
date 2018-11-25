import * as tslib_1 from "tslib";
import Notice from "./Notice";
var FatalNotice = /** @class */ (function (_super) {
    tslib_1.__extends(FatalNotice, _super);
    function FatalNotice() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getCategory = function () { return 'fatal'; };
        return _this;
    }
    return FatalNotice;
}(Notice));
export default FatalNotice;
