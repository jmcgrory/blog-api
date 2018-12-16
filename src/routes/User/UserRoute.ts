import Route from '../Route';
import { UserModel } from '../../models';
import RouteMethod from '../RouteMethod';
import * as moment from 'moment';
import mongoose from 'mongoose';
import { ErrorNotice } from '../../notices';

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
        type: String
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
        this.bindRouteMethods();
    }

    protected getCustomRouteMethods = (): RouteMethod[] => [
        new RouteMethod('/authenticate', 'get', this.getUserByUsername)
    ];

    protected getRouterModel = (): UserModel => new UserModel(User);

    /**
     * @todo
     */
    private getUserByUsername = (req, res, next) => {
        const errorNotice = new ErrorNotice(
            'Login credentials are incorrect.',
            283723,
            'One or more fields could not be verified.'
        );
        const username = req.query.username;
        const password = req.query.password;
        this.model.getUserByUsername(username, (err, data) => {
            if (err || !data) {
                res.status(404).json(errorNotice.toObject());
            } else {
                this.model.comparePasswords(
                    password,
                    data.password,
                    (err, data) => {
                        if (err || !data) {
                            res.status(401).json(errorNotice.toObject());
                        }
                        res.json(data);
                    });
            }
        })
    }
}

export default UserRoute;
