import Route from '../Route';
import { Model, ArticleModel } from '../../models';
import * as moment from 'moment';
import mongoose from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;

const schema = new mongoose.Schema({
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
        type: [Object],
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

const Article = mongoose.model('article', schema);

class ArticleRoute extends Route {

    protected name: string = 'article';
    protected model: ArticleModel;
    public static base: string = '/article';
    protected useDefaultMethods: boolean = true;

    constructor() {
        super();
        this.model = this.getRouterModel();
        this.bindRouteMethods();
    }

    protected getRouterModel = (): ArticleModel => new ArticleModel(Article);

}

export default ArticleRoute;
