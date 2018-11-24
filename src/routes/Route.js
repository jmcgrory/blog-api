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
                var handlers = [value];
                if (auth) {
                    handlers.unshift(passport.authenticate('jwt', { session: false }));
                }
                _this.router[type](url, handlers);
            });
        };
        this.getDefaultRouteMethods = function () {
            return [
                new RouteMethod('/id', 'GET', _this.getIds),
                new RouteMethod('/get', 'GET', _this.getModel),
                new RouteMethod('/get-many', 'GET', _this.getModels),
                new RouteMethod('/save', 'POST', _this.save, true),
                new RouteMethod('/remove', 'POST', _this.remove, true),
                new RouteMethod('/update', 'POST', _this.update, true),
                new RouteMethod('/active', 'POST', _this.setActive, true)
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
