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
        default: ''
    },
    blurb: {
        type: String,
        default: ''
    },
    slug: {
        type: String,
        default: ''
    },
    image: {
        type: ObjectId,
    },
    categories: {
        type: [ObjectId],
        default: []
    },
    tags: {
        type: [ObjectId],
        default: []
    },
    content: {
        type: String,
        default: ''
    },
    metaTitle: {
        type: String,
        default: ''
    },
    metaDescription: {
        type: String,
        default: ''
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

    public getRouterModel = (): ArticleModel => new ArticleModel(Article);

}

export default ArticleRoute;
