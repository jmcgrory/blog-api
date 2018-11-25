import * as tslib_1 from "tslib";
import { Router as ExpressRouter } from 'express';
import RouteMethod from './RouteMethod';
import passport from 'passport';
var Router = /** @class */ (function () {
    function Router() {
        var _this = this;
        this.bindRouteMethods = function () {
            _this.getRouteMethods().forEach(function (_a) {
                var url = _a.url, type = _a.type, value = _a.value, auth = _a.auth;
                var _b;
                var handlers = [value];
                if (auth) {
                    handlers.unshift(_this.getAuthentication());
                }
                (_b = _this.router)[type].apply(_b, tslib_1.__spread([url], handlers));
            });
        };
        this.getAuthentication = function () {
            return passport.authenticate('jwt', { session: false });
        };
        this.getDefaultRouteMethods = function () {
            return [
                new RouteMethod('/ids', 'get', _this.getIds),
                new RouteMethod('/get', 'get', _this.getModel),
                new RouteMethod('/get-many', 'get', _this.getModels),
                new RouteMethod('/save', 'put', _this.save, true),
                new RouteMethod('/remove', 'delete', _this.remove, true),
                new RouteMethod('/update', 'patch', _this.update, true),
                new RouteMethod('/active', 'patch', _this.setActive, true)
            ];
        };
        this.getCustomRouteMethods = function () { return []; };
        this.getRouteMethods = function () {
            return tslib_1.__spread(_this.getDefaultRouteMethods(), _this.getCustomRouteMethods());
        };
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
            console.log('[getModels]');
            // TODO:
            _this.model.getModels([], function (err, data) {
                res.json({});
            });
        };
        this.save = function (req, res, next) {
            console.log('[save]');
            // TODO:
            _this.model.save({}, function (err, data) {
                console.log(err);
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
