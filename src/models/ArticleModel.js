import * as tslib_1 from "tslib";
import Model from './Model';
import * as moment from 'moment';
import { Schema } from 'mongoose';
var ArticleModel = /** @class */ (function (_super) {
    tslib_1.__extends(ArticleModel, _super);
    function ArticleModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.schema = new Schema({
            // updatedAt
            // deletedAt
            createdAt: {
                type: Date,
                default: moment().format(),
                required: true
            }
        });
        _this.params = new Map([]);
        return _this;
    }
    return ArticleModel;
}(Model));
export default ArticleModel;
