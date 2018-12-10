import * as tslib_1 from "tslib";
import Route from '../Route';
import { MediaModel } from '../../models';
import * as moment from 'moment';
import mongoose from 'mongoose';
var schema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: moment.now(),
        required: true
    },
    updatedAt: {
        type: Date,
        default: null
    },
    deletedAt: {
        type: Date,
        default: null
    },
    url: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    }
}, {
    collection: 'media'
});
var Media = mongoose.model('media', schema);
var MediaRoute = /** @class */ (function (_super) {
    tslib_1.__extends(MediaRoute, _super);
    function MediaRoute() {
        var _this = _super.call(this) || this;
        _this.name = 'media';
        _this.useDefaultMethods = true;
        _this.getRouterModel = function () { return new MediaModel(Media); };
        _this.model = _this.getRouterModel();
        return _this;
    }
    MediaRoute.base = '/media';
    return MediaRoute;
}(Route));
export default MediaRoute;
