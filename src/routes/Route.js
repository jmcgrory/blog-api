import * as tslib_1 from "tslib";
import { Router as ExpressRouter } from 'express';
import RouteMethod from './RouteMethod';
import passport from 'passport';
import { SuccessNotice, ErrorNotice } from '../notices';
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
                var routerMethod = _this.router[type];
                if (typeof routerMethod === 'function') {
                    (_b = _this.router)[type].apply(_b, tslib_1.__spread([url], handlers));
                }
                else {
                    throw new Error("Cannot access request method \"" + type + "\" on router.");
                }
            });
        };
        this.getAuthentication = function () {
            return passport.authenticate('jwt', { session: false });
        };
        this.getDefaultRouteMethods = function () { return [
            new RouteMethod('/ids', 'get', _this.getIds),
            new RouteMethod('/get', 'get', _this.getModel),
            new RouteMethod('/get-many', 'get', _this.getModels),
            new RouteMethod('/save', 'put', _this.save, true),
            new RouteMethod('/remove', 'delete', _this.remove, true),
            new RouteMethod('/update', 'patch', _this.update, true),
            new RouteMethod('/active', 'patch', _this.setActive, true)
        ]; };
        this.getCustomRouteMethods = function () { return []; };
        this.getRouteMethods = function () {
            return tslib_1.__spread((_this.useDefaultMethods) ? _this.getDefaultRouteMethods() : [], _this.getCustomRouteMethods(), [
                new RouteMethod('/*', 'get', _this.routeMethodUnavailable),
            ]);
        };
        /**
         * @todo handle errs
         */
        this.getIds = function (req, res, next) {
            // TODO: Handle params req.query
            var parameters = {};
            // TODO: Use Async?
            _this.model.getIds(parameters, function (err, data) {
                res.json(data);
            });
        };
        /**
         * @todo handle errs
         */
        this.getModel = function (req, res, next) {
            console.log('[getModel]');
            var id = req.query.id;
            _this.model.getModel(id, function (err, data) {
                console.log('error:', err);
                res.json(data);
            });
        };
        /**
         * @todo handle errs
         */
        this.getModels = function (req, res, next) {
            console.log('[getModels]');
            var idsString = req.query.ids;
            if (idsString && idsString.length) {
                var ids = idsString.split(',');
                _this.model.getModels(ids, function (err, data) {
                    console.log('error:', err);
                    res.json(data);
                });
            }
        };
        /**
         * @todo handle errs
         */
        this.save = function (req, res, next) {
            _this.model.save(req.body, function (err, data) {
                if (err) {
                    res.json(new ErrorNotice('This Item could not be saved.', 73282).toObject());
                }
                else {
                    res.json(new SuccessNotice('Item successfully saved', 393901).toObject());
                }
            });
        };
        /**
         * @todo handle errs
         */
        this.remove = function (req, res, next) {
            var id = req.query.id;
            _this.model.remove(id, function (err, data) {
                if (err) {
                    res.json(new ErrorNotice('Item could not be removed.').toObject());
                }
                else {
                    res.json(new SuccessNotice('Item successfully removed', 454555).toObject());
                }
            });
        };
        /**
         * @todo handle errs
         */
        this.update = function (req, res, next) {
            var id = req.query.id;
            var newData = req.query.body;
            _this.model.update(id, newData, function (err, data) {
                if (err) {
                    res.json(new ErrorNotice('Item could not be updated.', 923238).toObject());
                }
                else {
                    res.json(new SuccessNotice('Item successfully updated.', 422344).toObject());
                }
            });
        };
        /**
         * @todo handle errs
         */
        this.setActive = function (req, res, next) {
            var id = req.query.id;
            var newState = req.query.active === 'true';
            _this.model.setActive(id, newState, function (err, data) {
                if (err) {
                    res.json(new ErrorNotice("Item active status could not be updated.", 427847).toObject());
                }
                else {
                    res.json(new SuccessNotice("Item is now " + (newState ? 'active' : 'inactive'), 943399).toObject());
                }
            });
        };
        this.getRouterModel = function () { return null; };
        this.getRouter = function () { return _this.router; };
        /**
         * Use when overriding an unavailable route within customRouteMethods
         */
        this.routeMethodUnavailable = function (req, res, next) {
            res.status(404).json(new ErrorNotice('404 - This Route Does Not Exist', 393905, 'You have attempted to access a route which does not exist.').toObject());
        };
        this.router = ExpressRouter();
    }
    return Router;
}());
export default Router;
