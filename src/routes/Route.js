import * as tslib_1 from "tslib";
import { Router as ExpressRouter } from 'express';
// interface RouteToModel {
//     type: 'POST' | 'GET';
//     method: Function;
// }
var Router = /** @class */ (function () {
    function Router() {
        var _this = this;
        this.defaultRoutes = new Map([
            ['getModel', 'GET'],
        ]);
        /** Extend in child to add custom model routes */
        this.customRoutes = new Map([]);
        this.generateRoutes = function () {
            var routes = _this.getRoutes();
            tslib_1.__spread(routes).forEach(function (_a) {
                // TODO:
                var _b = tslib_1.__read(_a, 2), route = _b[0], method = _b[1];
            });
        };
        this.getRoutes = function () {
            return new Map(tslib_1.__spread(_this.defaultRoutes, _this.customRoutes));
        };
        this.authenticatedRequest = function (req, res, next) {
            // TODO: Wrapper for certain requests
        };
        this.getModel = function () { return null; };
        this.getRouter = function () {
            return _this.router;
        };
        this.router = ExpressRouter();
        this.generateRoutes();
    }
    return Router;
}());
export default Router;
