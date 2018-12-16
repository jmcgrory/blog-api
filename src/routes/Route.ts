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

    private getDefaultRouteMethods = (): RouteMethod[] => [
        new RouteMethod('/ids', 'get', this.getIds),
        new RouteMethod('/get', 'get', this.getModel),
        new RouteMethod('/get-many', 'get', this.getModels),
        new RouteMethod('/save', 'put', this.save, true),
        new RouteMethod('/remove', 'delete', this.remove, true),
        new RouteMethod('/update', 'patch', this.update, true),
        new RouteMethod('/active', 'patch', this.setActive, true)
    ];

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
        // TODO: Handle params req.query
        const parameters = {};
        // TODO: Use Async?
        this.model.getIds(parameters, (err, data) => {
            res.json(data);
        });
    }

    /**
     * @todo handle errs
     */
    protected getModel = (req, res, next): void => {
        console.log('[getModel]');
        const id = req.query.id;
        this.model.getModel(id, (err, data) => {
            console.log('error:', err);
            res.json(data);
        });
    }

    /**
     * @todo handle errs
     */
    protected getModels = (req, res, next): void => {
        console.log('[getModels]');
        const idsString = req.query.ids;
        if (idsString && idsString.length) {
            const ids = idsString.split(',');
            this.model.getModels(ids, (err, data) => {
                console.log('error:', err);
                res.json(data);
            });
        }
    }

    /**
     * @todo handle errs
     */
    protected save = (req, res, next): void => {
        this.model.save(req.body, (err, data) => {
            if (err) {
                res.json(new ErrorNotice(
                    'This Item could not be saved.',
                    73282
                ).toObject());
            } else {
                res.json(new SuccessNotice(
                    'Item successfully saved',
                    393901
                ).toObject());
            }
        });
    }

    /**
     * @todo handle errs
     */
    protected remove = (req, res, next): void => {
        const id = req.query.id;
        this.model.remove(id, (err, data) => {
            if (err) {
                res.json(new ErrorNotice(
                    'Item could not be removed.'
                ).toObject());
            } else {
                res.json(new SuccessNotice(
                    'Item successfully removed',
                    454555
                ).toObject());
            }
        });
    }

    /**
     * @todo handle errs
     */
    protected update = (req, res, next): void => {
        const id = req.query.id;
        const newData = req.query.body;
        this.model.update(id, newData, (err, data) => {
            if (err) {
                res.json(new ErrorNotice(
                    'Item could not be updated.',
                    923238
                ).toObject());
            } else {
                res.json(new SuccessNotice(
                    'Item successfully updated.',
                    422344
                ).toObject());
            }
        });
    }

    /**
     * @todo handle errs
     */
    protected setActive = (req, res, next): void => {
        const id = req.query.id;
        const newState = req.query.active === 'true';
        this.model.setActive(id, newState, (err, data) => {
            if (err) {
                res.json(new ErrorNotice(
                    `Item active status could not be updated.`,
                    427847
                ).toObject());
            } else {
                res.json(new SuccessNotice(
                    `Item is now ${newState ? 'active' : 'inactive'}`,
                    943399
                ).toObject());
            }
        });
    }

    public getRouterModel = (): Model => null;

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
