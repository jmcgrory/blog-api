import mongoose, { Schema } from 'mongoose';

/**
 * Base Model Class
 * 
 * Contains core Model behaviours
 */
abstract class Model {

    /**
     * Needs to be set on every model (abstract?)
     */
    protected abstract schema: Schema;

    /**
     * Also needs to be set on every model (abstract?)
     * 
     * e.g. [
     *  [ 'name', Handler? ]
     * ]
     */
    protected abstract params: Map<string, any>;

    /**
     * Temporary undecided
     * TODO:
     */
    protected static by: Map<string, any> = new Map([

        ['is', null],

        ['isnt', null],

        ['contains', null],

        ['before', null],

        ['after', null]

    ]);

    /**
     * Also temp
     * defaults to...
     * dates will have to be handled differently to...
     * TODO:
     */
    protected static order: Map<string, any> = new Map([

        ['ASC', null],

        ['DESC', null]

    ]);

    /**
     * Finds an exhaustive array of identifiers that match
     * 
     * Requests without parameters will return all active
     * 
     * TODO: parameters will be of type xyz
     * 
     * /url/getids/{column}/{by}/{this}/.../{order}
     * 
     */
    public static getIds = (
        parameters: any,
        callback: Function
    ): void => {

        // TODO:

        console.log(parameters);

        callback();

    }

    /**
     * Returns a Model from its identifier
     */
    public static getModel = (id: number, callback: Function) => {

        // TODO:

        console.log(id);

        callback();

    }

    /**
     * Returns an array of Models from a list of identifiers
     */
    public static getModels = (ids: number[], callback: Function) => {

        // TODO:

        console.log(ids);

        callback();

    }

    /**
     * Saves a new instance of a model
     * 
     * Will ignore any _id, createdAt etc.
     */
    public static save = (
        newModel: any,
        callback: Function
    ): void => {

        // TODO:

        console.log(newModel);

        callback();

    }

    /**
     * Removes within model from an identifier
     */
    public static remove = (
        id: number,
        callback: Function
    ): void => {

        // TODO:

        console.log(id);

        callback();

    }

    /**
     * Updates a model by identifier with new data
     * 
     * Will ignore any _id, createdAt etc.
     */
    public static update = (
        id: number,
        newData: any,
        callback: Function
    ): void => {

        // TODO:

        console.log(id, newData);

        callback();

    }

    /**
     * Toggles a model's active state
     */
    public static setActive = (
        id: number,
        isActive: boolean,
        callback: Function
    ): void => {

        // TODO:

        console.log(id, isActive);

        callback();

    }

}

export default Model;
