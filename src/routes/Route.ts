import { Router as ExpressRouter } from 'express';
import Model from '../models/Model';

// interface RouteToModel {

//     type: 'POST' | 'GET';

//     method: Function;

// }

abstract class Router {

    public static base: string;

    protected model: Model;

    protected router: ExpressRouter;

    protected defaultRoutes: Map<string, string> = new Map([

        ['getModel', 'GET'],

    ]);

    /** Extend in child to add custom model routes */
    protected customRoutes: Map<string, string> = new Map([]);

    constructor() {

        this.router = ExpressRouter();

        this.generateRoutes();

    }

    protected generateRoutes = (): void => {

        const routes = this.getRoutes();

        [...routes].forEach(([route, method]) => {

            // TODO:

        });

    }

    protected getRoutes = (): Map<string, string> => {

        return new Map([

            ...this.defaultRoutes,

            ...this.customRoutes

        ]);

    }

    protected authenticatedRequest = (req, res, next): any => {

        // TODO: Wrapper for certain requests

    }

    public abstract getModel = (): Model => null;

    public getRouter = (): ExpressRouter => {

        return this.router;

    }

}

export default Router;
