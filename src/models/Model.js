/**
 * Base Model Class
 *
 * Contains core Model behaviours
 */
var Model = /** @class */ (function () {
    function Model() {
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
        this.getIds = function (parameters, callback) {
            // TODO:
            console.log(parameters);
            callback();
        };
        /**
         * Returns a Model from its identifier
         */
        this.getModel = function (id, callback) {
            // TODO:
            console.log(id);
            callback();
        };
        /**
         * Returns an array of Models from a list of identifiers
         */
        this.getModels = function (ids, callback) {
            // TODO:
            console.log(ids);
            callback();
        };
        /**
         * Saves a new instance of a model
         *
         * Will ignore any _id, createdAt etc.
         */
        this.save = function (newModel, callback) {
            // TODO:
            console.log(newModel);
            callback();
        };
        /**
         * Removes within model from an identifier
         */
        this.remove = function (id, callback) {
            // TODO:
            console.log(id);
            callback();
        };
        /**
         * Updates a model by identifier with new data
         *
         * Will ignore any _id, createdAt etc.
         */
        this.update = function (id, newData, callback) {
            // TODO:
            console.log(id, newData);
            callback();
        };
        /**
         * Toggles a model's active state
         */
        this.setActive = function (id, isActive, callback) {
            // TODO:
            console.log(id, isActive);
            callback();
        };
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
    return Model;
}());
export default Model;
