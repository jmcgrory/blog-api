import * as tslib_1 from "tslib";
import Route from '../Route';
import { ArticleModel } from '../../models';
import * as moment from 'moment';
import mongoose from 'mongoose';
var ObjectId = mongoose.Schema.Types.ObjectId;
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
    title: {
        type: String,
    },
    blurb: {
        type: String,
    },
    slug: {
        type: String,
    },
    image: {
        type: ObjectId,
    },
    categories: {
        type: [ObjectId],
    },
    tags: {
        type: [ObjectId],
    },
    content: {
        type: String,
    },
    metaTitle: {
        type: String,
    },
    metaDescription: {
        type: String,
    },
}, {
    collection: 'article'
});
var Article = mongoose.model('article', schema);
var ArticleRoute = /** @class */ (function (_super) {
    tslib_1.__extends(ArticleRoute, _super);
    function ArticleRoute() {
        var _this = _super.call(this) || this;
        _this.name = 'article';
        _this.useDefaultMethods = true;
        _this.getRouterModel = function () { return new ArticleModel(Article); };
        _this.model = _this.getRouterModel();
        _this.bindRouteMethods();
        return _this;
    }
    ArticleRoute.base = '/article';
    return ArticleRoute;
}(Route));
export default ArticleRoute;
