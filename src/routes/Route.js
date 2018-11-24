import { Router as ExpressRouter } from 'express';
var Router = /** @class */ (function () {
    function Router() {
        var _this = this;
        this.getIds = function (req, res, next) {
            var parameters = {};
            // TODO: Use Async?
            _this.model.getIds(parameters, function (err, data) {
                console.log('[getIds]');
                console.log(err);
                res.json({});
            });
        };
        this.getModel = function (req, res, next) {
            // TODO: Use Async?
            _this.model.getModel(1, function (err, data) {
                console.log('[getModel]');
                console.log(err);
                res.json({});
            });
        };
        this.getModels = function (req, res, next) {
            // TODO:
            _this.model.getModels([], function (err, data) {
                console.log('[getModels]');
                res.json({});
            });
        };
        this.save = function (req, res, next) {
            // TODO:
            _this.model.save({}, function (err, data) {
                res.json({});
            });
        };
        this.remove = function (req, res, next) {
            // TODO:
            _this.model.remove(1, function (err, data) {
                res.json({});
            });
        };
        this.update = function (req, res, next) {
            // TODO:
            _this.model.update(1, {}, function (err, data) {
                res.json({});
            });
        };
        this.setActive = function (req, res, next) {
            // TODO:
            _this.model.setActive(1, true, function (err, data) {
                res.json({});
            });
        };
        // protected getRoutes = (): Map<string, string> => {
        //     return new Map([
        //         ...this.defaultRoutes,
        //         ...this.customRoutes
        //     ]);
        // }
        this.authenticatedRequest = function (req, res, next) {
            // TODO: Wrapper for certain requests
        };
        this.getRouterModel = function () { return null; };
        this.getRouter = function () {
            return _this.router;
        };
        this.router = ExpressRouter();
    }
    return Router;
}());
export default Router;
