/**
 * Base Model Class
 *
 * Contains core Model behaviours
 */
var Model = /** @class */ (function () {
    function Model() {
    }
    /**
     * Temporary undecided
     * TODO:
     */
    Model.by = new Map([
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
    Model.order = new Map([
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
    Model.getIds = function (parameters, callback) {
        // TODO:
        console.log(parameters);
        callback();
    };
    /**
     * Returns a Model from its identifier
     */
    Model.getModel = function (id, callback) {
        // TODO:
        console.log(id);
        callback();
    };
    /**
     * Returns an array of Models from a list of identifiers
     */
    Model.getModels = function (ids, callback) {
        // TODO:
        console.log(ids);
        callback();
    };
    /**
     * Saves a new instance of a model
     *
     * Will ignore any _id, createdAt etc.
     */
    Model.save = function (newModel, callback) {
        // TODO:
        console.log(newModel);
        callback();
    };
    /**
     * Removes within model from an identifier
     */
    Model.remove = function (id, callback) {
        // TODO:
        console.log(id);
        callback();
    };
    /**
     * Updates a model by identifier with new data
     *
     * Will ignore any _id, createdAt etc.
     */
    Model.update = function (id, newData, callback) {
        // TODO:
        console.log(id, newData);
        callback();
    };
    /**
     * Toggles a model's active state
     */
    Model.setActive = function (id, isActive, callback) {
        // TODO:
        console.log(id, isActive);
        callback();
    };
    return Model;
}());
export default Model;
