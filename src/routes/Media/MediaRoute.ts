import Route from '../Route';
import { MediaModel } from '../../models';
import * as moment from 'moment';
import mongoose from 'mongoose';

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

const Media = mongoose.model('media', schema);

class MediaRoute extends Route {

    protected name: string = 'media';
    protected model: MediaModel;
    public static base: string = '/media';
    protected useDefaultMethods: boolean = true;

    constructor() {
        super();
        this.model = this.getRouterModel();
    }

    protected getRouterModel = (): MediaModel => new MediaModel(Media);

}

export default MediaRoute;
