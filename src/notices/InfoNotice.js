import * as tslib_1 from "tslib";
import Notice from "./Notice";
var InfoNotice = /** @class */ (function (_super) {
    tslib_1.__extends(InfoNotice, _super);
    function InfoNotice() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getCategory = function () { return 'info'; };
        return _this;
    }
    return InfoNotice;
}(Notice));
export default InfoNotice;
