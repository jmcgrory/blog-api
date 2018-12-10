import { Router as ExpressRouter } from 'express';
import Model from '../models/Model';
import RouteMethod from './RouteMethod';
import passport from 'passport';
import { SuccessNotice, ErrorNotice } from '../notices';

abstract class Router {

    public static base: string;
    protected abstract name: string;
    protected model: Model;
    protected router: ExpressRouter;
    protected abstract useDefaultMethods: boolean;

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
            ...(this.useDefaultMethods) ? this.getDefaultRouteMethods() : [],
            ...this.getCustomRouteMethods(),
            new RouteMethod('/*', 'get', this.routeMethodUnavailable),
        ];
    }

    /**
     * @todo handle errs
     */
    protected getIds = (req, res, next): void => {
        const parameters = {};
        // TODO: Use Async?
        this.model.getIds(parameters, (err, data) => {
            console.log('[getIds]');
            console.log(err);
            res.json({});
        });
    }

    /**
     * @todo handle errs
     */
    protected getModel = (req, res, next): void => {
        const id = req.body.id;
        this.model.getModel(id, (err, data) => {
            console.log('[getModel]');
            console.log(err);
            res.json(data);
        });
    }

    /**
     * @todo handle errs
     */
    protected getModels = (req, res, next): void => {
        console.log('[getModels]');
        // TODO:
        this.model.getModels([], (err, data) => {
            res.json({});
        });
    }

    /**
     * @todo handle errs
     */
    protected save = (req, res, next): void => {
        console.log('[save]');
        // TODO:
        this.model.save({}, (err, data) => {
            if (err) {
                // TODO: Decide Err and return
            } else {
                res.json(new SuccessNotice(
                    'Item Successfully Saved',
                    393901
                ).toObject());
            }
        });
    }

    /**
     * @todo handle errs
     */
    protected remove = (req, res, next): void => {
        const id = req.body.id;
        // TODO:
        this.model.remove(id, (err, data) => {
            if (err) {
                // TODO: Decide Err and return
            } else {
                res.json(new SuccessNotice(
                    'Item Successfully Removed',
                    393902
                ).toObject());
            }
        });
    }

    /**
     * @todo handle errs
     */
    protected update = (req, res, next): void => {
        const id = req.body.id;
        // TODO: req.body.data?
        this.model.update(id, {}, (err, data) => {
            if (err) {
                // TODO: Decide Err and return
            } else {
                res.json(new SuccessNotice(
                    'Item Successfully Updated',
                    393903
                ).toObject());
            }
        });
    }

    /**
     * @todo handle errs
     */
    protected setActive = (req, res, next): void => {
        const id = req.body.id;
        // TODO:
        const newState = true;
        this.model.setActive(id, true, (err, data) => {
            if (err) {
                // TODO: Decide Err and return
            } else {
                res.json(new SuccessNotice(
                    `Item is ${newState ? 'Active' : 'Inactive'}`,
                    393904
                ).toObject());
            }
        });
    }

    protected getRouterModel = (): Model => null;

    public getRouter = (): ExpressRouter => this.router;

    /**
     * Use when overriding an unavailable route within customRouteMethods
     */
    protected routeMethodUnavailable = (req, res, next): void => {
        res.status(404).json(new ErrorNotice(
            '404 - This Route Does Not Exist',
            393905,
            'You have attempted to access a route which does not exist.'
        ).toObject());
    }

}

export default Router;
