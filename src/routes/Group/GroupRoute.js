import * as tslib_1 from "tslib";
import Route from '../Route';
import { GroupModel } from '../../models';
import RouteMethod from '../RouteMethod';
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
var Group = mongoose.model('group', schema);
var GroupRoute = /** @class */ (function (_super) {
    tslib_1.__extends(GroupRoute, _super);
    function GroupRoute() {
        var _this = _super.call(this) || this;
        _this.name = 'group';
        _this.useDefaultMethods = false;
        _this.getRouterModel = function () { return new GroupModel(Group); };
        _this.getCustomRouteMethods = function () { return [
            new RouteMethod('/get', 'get', _this.getCategories),
        ]; };
        _this.getCategories = function (req, res, next) {
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
        };
        _this.model = _this.getRouterModel();
        _this.bindRouteMethods();
        return _this;
    }
    GroupRoute.base = '/group';
    return GroupRoute;
}(Route));
export default GroupRoute;
