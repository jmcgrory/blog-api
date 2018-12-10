import Route from '../Route';
import { UserModel } from '../../models';
import RouteMethod from '../RouteMethod';
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
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    }
}, {
        collection: 'user'
    });

const User = mongoose.model('user', schema);

class UserRoute extends Route {

    protected name: string = 'user';
    protected model: UserModel;
    public static base: string = '/user';
    protected useDefaultMethods: boolean = false;

    constructor() {
        super();
        this.model = this.getRouterModel();
    }

    protected getRouterModel = (): UserModel => new UserModel(User);

    /**
     * @todo
     */
    public static authenticate = (id: string, callback: Function) => {
        return Promise.resolve({ lol: 'data' });
    }

}

export default UserRoute;
