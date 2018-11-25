import * as tslib_1 from "tslib";
import Route from '../Route';
import { MediaModel } from '../../models';
var MediaRoute = /** @class */ (function (_super) {
    tslib_1.__extends(MediaRoute, _super);
    function MediaRoute() {
        var _this = _super.call(this) || this;
        _this.useDefaultMethods = true;
        _this.getRouterModel = function () { return new MediaModel(); };
        _this.model = _this.getRouterModel();
        return _this;
    }
    MediaRoute.base = '/media';
    return MediaRoute;
}(Route));
export default MediaRoute;
