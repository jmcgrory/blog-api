import Route from '../Route';
import { UserModel } from '../../models';
import RouteMethod from '../RouteMethod';
import * as moment from 'moment';
import mongoose from 'mongoose';
import { ErrorNotice, SuccessNotice } from '../../notices';
import * as jwt from 'jsonwebtoken';

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
        new RouteMethod('/authenticate', 'get', this.getUserByUsername),
        new RouteMethod('/token', 'get', this.authenticateToken, true)
    ];

    public getRouterModel = (): UserModel => new UserModel(User);

    private authenticateUser = (req, res, next) => {
        // TODO: Use instead of getUserByUsername...
    }

    private authenticateToken = (req, res, next) => {
        this.model.getUserByUsername(req.query.username, (err, data) => {
            if (err) {
                res.json(new ErrorNotice('Authentication Error'));
            } else {
                res.json(new SuccessNotice('User Authenticated'));
            }
        });
    }

    /**
     * @todo
     */
    private getUserByUsername = (req, res, next) => {
        console.log('[getUserByUsername]');
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
                const id = data._id;
                this.model.comparePasswords(
                    password,
                    data.password,
                    (err, data) => {
                        if (err || !data) {
                            res.status(401).json(errorNotice.toObject());
                        } else {
                            this.model.updateUserToken(
                                id,
                                username,
                                (err, { ok }) => {
                                    if (err || !ok) {
                                        res.status(500).json(errorNotice.toObject());
                                    }
                                    const newToken = jwt.sign({
                                        id: id,
                                        username: username
                                    }, process.env.PASSPORT_SECRET);
                                    res.json({
                                        token: newToken,
                                        username: username
                                    });
                                }
                            )
                        }
                    });
            }
        })
    }
}

export default UserRoute;
