import mongoose from 'mongoose';

/**
 * Base Model Class
 * Contains Core Model Behaviours
 */
abstract class Model {

    /**
     * @todo update type to mongoose
     */
    protected model: any;

    constructor(MongoModel: any) {
        this.model = MongoModel;
    }

    /**
     * Finds an exhaustive array of identifiers that match
     * 
     * Requests without parameters will return all active
     * 
     * @todo parameters will be handled by new SearchParams()
     * 
     * /url/getids/{column}/{by}/{this}/.../{order}
     * 
     */
    public getIds = (
        parameters: any,
        callback: Function
    ): void => {
        console.log(parameters);
        this.model.find({}, '_id').exec(callback);
    }

    /**
     * Returns a Model from its identifier
     */
    public getModel = (id: string, callback: Function) => {
        this.model.findById(id).exec(callback);
    }

    /**
     * Returns an array of Models from a list of identifiers
     */
    public getModels = (ids: string[], callback: Function) => {
        console.log(ids);
        this.model.find({
            _id: {
                $in: ids.map((id) => mongoose.Types.ObjectId(id))
            }
        }).exec(callback);
    }

    /**
     * Saves a new instance of a model
     * 
     * Will ignore any _id, createdAt etc.
     */
    public save = (
        modelData: any,
        callback: Function
    ): void => {
        const NewModel = this.model;
        const newModel = new NewModel(modelData);
        newModel.save(callback);
    }

    /**
     * Removes within model from an identifier
     */
    public remove = (
        id: string,
        callback: Function
    ): void => {
        this.model.findByIdAndDelete(id).exec(callback);
    }

    /**
     * Updates a model by identifier with new data
     * 
     * Will ignore any _id, createdAt etc.
     */
    public update = (
        id: string,
        newData: any,
        callback: Function
    ): void => {
        this.model.findByIdAndUpdate(id, newData).exec(callback);
    }

    /**
     * Toggles a model's active state
     */
    public setActive = (
        id: string,
        isActive: boolean,
        callback: Function
    ): void => {
        this.model.findByIdAndUpdate(id, {
            isActive: isActive
        }).exec(callback);
    }

}

export default Model;
