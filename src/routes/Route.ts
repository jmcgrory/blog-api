import { Router as ExpressRouter } from 'express';
import Model from '../models/Model';

abstract class Router {

    public static base: string;

    protected model: Model;

    protected router: ExpressRouter;

    constructor() {

        this.router = ExpressRouter();

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

    // protected getRoutes = (): Map<string, string> => {

    //     return new Map([

    //         ...this.defaultRoutes,

    //         ...this.customRoutes

    //     ]);

    // }

    protected authenticatedRequest = (req, res, next): any => {

        // TODO: Wrapper for certain requests

    }

    protected getRouterModel = (): Model => null;

    public getRouter = (): ExpressRouter => {

        return this.router;

    }

}

export default Router;
