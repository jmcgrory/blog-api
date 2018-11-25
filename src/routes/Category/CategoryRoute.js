import * as tslib_1 from "tslib";
import Route from '../Route';
import { CategoryModel } from '../../models';
var CategoryRoute = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryRoute, _super);
    function CategoryRoute() {
        var _this = _super.call(this) || this;
        _this.useDefaultMethods = true;
        _this.getRouterModel = function () { return new CategoryModel(); };
        _this.model = _this.getRouterModel();
        return _this;
    }
    CategoryRoute.base = '/category';
    return CategoryRoute;
}(Route));
export default CategoryRoute;
