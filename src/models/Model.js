import mongoose from 'mongoose';
/**
 * Base Model Class
 * Contains Core Model Behaviours
 */
var Model = /** @class */ (function () {
    function Model(MongoModel) {
        var _this = this;
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
        this.getIds = function (parameters, callback) {
            _this.model.find({}, '_id').exec(callback);
        };
        /**
         * Returns a Model from its identifier
         */
        this.getModel = function (id, callback) {
            console.log(id);
            _this.model.findById(id).exec(callback);
        };
        /**
         * Returns an array of Models from a list of identifiers
         */
        this.getModels = function (ids, callback) {
            _this.model.find({
                _id: {
                    $in: ids.map(function (id) { return mongoose.Types.ObjectId(id); })
                }
            }).exec(callback);
        };
        /**
         * Saves a new instance of a model
         *
         * Will ignore any _id, createdAt etc.
         */
        this.save = function (modelData, callback) {
            var NewModel = _this.model;
            var newModel = new NewModel(modelData);
            newModel.save(callback);
        };
        /**
         * Deletes model via identifier
         */
        this.delete = function (id, callback) {
            _this.model.deleteOne({ _id: id }).exec(callback);
        };
        /**
         * Updates a model by identifier with new data
         *
         * Will ignore any _id, createdAt etc.
         */
        this.update = function (id, newData, callback) {
            console.log(id, newData);
            _this.model.updateOne({ _id: id }, newData).exec(callback);
        };
        /**
         * Toggles a model's active state
         */
        this.setActive = function (id, isActive, callback) {
            _this.model.updateOne({ _id: id }, {
                isActive: isActive
            }).exec(callback);
        };
        this.model = MongoModel;
    }
    return Model;
}());
export default Model;
