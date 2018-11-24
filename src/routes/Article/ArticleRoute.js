import * as tslib_1 from "tslib";
import Route from '../Route';
import { ArticleModel } from '../../models';
var ArticleRoute = /** @class */ (function (_super) {
    tslib_1.__extends(ArticleRoute, _super);
    function ArticleRoute() {
        var _this = _super.call(this) || this;
        _this.getRouterModel = function () { return new ArticleModel(); };
        _this.model = _this.getRouterModel();
        _this.bindRouteMethods();
        return _this;
    }
    ArticleRoute.base = '/article';
    return ArticleRoute;
}(Route));
export default ArticleRoute;
