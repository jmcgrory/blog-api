import { Router as ExpressRouter } from 'express';
import Model from '../models/Model';
import RouteMethod from './RouteMethod';
import passport from 'passport';
import { SuccessNotice } from '../notices';

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
            const routerMethod = this.router[type];
            if (typeof routerMethod === 'function') {
                this.router[type](url, ...handlers);
            } else {
                throw new Error(`Cannot access request method "${type}" on router.`);
            }
        });
    }

    private getAuthentication = (): any => {
        return passport.authenticate('jwt', { session: false });
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
        console.log('[getModels]');
        // TODO:
        this.model.getModels([], (err, data) => {
            res.json({});
        });
    }

    protected save = (req, res, next): void => {
        console.log('[save]');
        // TODO:
        this.model.save({}, (err, data) => {
            if (err) {
                // TODO: Decide Err and return
            } else {
                res.status(300).json(new SuccessNotice(
                    'Item Successfully Saved',
                    393901
                ).toObject());
            }
        });
    }

    protected remove = (req, res, next): void => {
        // TODO:
        this.model.remove(1, (err, data) => {
            if (err) {
                // TODO: Decide Err and return
            } else {
                res.status(300).json(new SuccessNotice(
                    'Item Successfully Removed',
                    393902
                ).toObject());
            }
        });
    }

    protected update = (req, res, next): void => {
        // TODO:
        this.model.update(1, {}, (err, data) => {
            if (err) {
                // TODO: Decide Err and return
            } else {
                res.status(300).json(new SuccessNotice(
                    'Item Successfully Updated',
                    393903
                ).toObject());
            }
        });
    }

    protected setActive = (req, res, next): void => {
        // TODO:
        const newState = true;
        this.model.setActive(1, true, (err, data) => {
            if (err) {
                // TODO: Decide Err and return
            } else {
                res.status(300).json(new SuccessNotice(
                    `Item is ${newState ? 'Active' : 'Inactive'}`,
                    393904
                ).toObject());
            }
        });
    }

    protected getRouterModel = (): Model => null;

    public getRouter = (): ExpressRouter => this.router;

}

export default Router;
