import { Router as ExpressRouter } from 'express';
import Model from '../models/Model';
import RouteMethod from './RouteMethod';
import passport from 'passport';

abstract class Router {

    public static base: string;
    protected model: Model;
    protected router: ExpressRouter;

    constructor() {
        this.router = ExpressRouter();
    }

    protected bindRouteMethods = (): void => {
        this.getRouteMethods().forEach(({ url, type, value, auth }) => {
            let handlers = [value];
            if (auth) {
                handlers.unshift(this.getAuthentication())
            }
            this.router[type](url, ...handlers);
        });
    }

    private getAuthentication = (): any => {
        return passport.authenticate('jwt', {
            session: true,
            failureFlash: 'TEST FAILURE RESPONSE'
        });
    }

    private getDefaultRouteMethods = (): RouteMethod[] => {
        return [
            new RouteMethod('/ids', 'get', this.getIds),
            new RouteMethod('/get', 'get', this.getModel),
            new RouteMethod('/get-many', 'get', this.getModels),
            new RouteMethod('/save', 'put', this.save, true),
            new RouteMethod('/remove', 'delete', this.remove, true),
            new RouteMethod('/update', 'patch', this.update, true),
            new RouteMethod('/active', 'patch', this.setActive, true)
        ];
    }

    protected getCustomRouteMethods = (): RouteMethod[] => [];

    private getRouteMethods = (): RouteMethod[] => {
        return [
            ...this.getDefaultRouteMethods(),
            ...this.getCustomRouteMethods()
        ];
    }

    protected getIds = (req, res, next): void => {
        const parameters = {};
        // TODO: Use Async?
        this.model.getIds(parameters, (err, data) => {
            console.log('[getIds]');
            console.log(err);
            res.json({});
        });
    }

    protected getModel = (req, res, next): void => {
        // TODO: Use Async?
        this.model.getModel(1, (err, data) => {
            console.log('[getModel]');
            console.log(err);
            res.json({});
        });
    }

    protected getModels = (req, res, next): void => {
        // TODO:
        this.model.getModels([], (err, data) => {
            console.log('[getModels]');
            res.json({});
        });
    }

    protected save = (req, res, next): void => {
        // TODO:
        this.model.save({}, (err, data) => {
            console.log(err);
            res.json({});
        });
    }

    protected remove = (req, res, next): void => {
        // TODO:
        this.model.remove(1, (err, data) => {
            res.json({});
        });
    }

    protected update = (req, res, next): void => {
        // TODO:
        this.model.update(1, {}, (err, data) => {
            res.json({});
        });
    }

    protected setActive = (req, res, next): void => {
        // TODO:
        this.model.setActive(1, true, (err, data) => {
            res.json({});
        });
    }

    protected authenticatedRequest = (req, res, next): any => {
        // TODO: Wrapper for certain requests
    }

    protected getRouterModel = (): Model => null;

    public getRouter = (): ExpressRouter => {
        return this.router;
    }

}

export default Router;
