import Route from '../Route';
import { GroupModel } from '../../models';
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
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'group',
        required: true,
    }
}, {
        collection: 'group'
    });

const Group = mongoose.model('group', schema);

class GroupRoute extends Route {

    protected name: string = 'group';
    protected model: GroupModel;
    public static base: string = '/group';
    protected useDefaultMethods: boolean = false;

    constructor() {
        super();
        this.model = this.getRouterModel();
        this.bindRouteMethods();
    }

    protected getRouterModel = (): GroupModel => new GroupModel(Group);

    protected getCustomRouteMethods = (): RouteMethod[] => [
        new RouteMethod('/get', 'get', this.getCategories),
    ];

    private getCategories = (req, res, next): void => {
        // TODO: Placeholder Values
        res.json([
            {
                id: 1,
                name: 'design',
                description: 'UI & UX Focused Design.',
            },
            {
                id: 2,
                name: 'development',
                description: 'Front & Back End Development.'
            },
            {
                id: 3,
                name: 'software architecture',
                description: 'System Design & Architecture.'
            }
        ]);
    }


}

export default GroupRoute;
