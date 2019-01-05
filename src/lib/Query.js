import * as tslib_1 from "tslib";
var Query = /** @class */ (function () {
    function Query(query) {
        var _this = this;
        this.setmatch = function (match) {
            var stringmatch = tslib_1.__spread(match.split(','));
            _this.match = stringmatch.reduce(function (previous, current) {
                var split = current.split(':');
                previous[split[0]] = split[1];
                return previous;
            }, {});
            console.log(_this.match);
        };
        /**
         * This has placeholder functionality currently
         * @todo implement fully
         */
        this.getParams = function () {
            return tslib_1.__assign({}, _this.match);
        };
        if (query.match) {
            this.setmatch(query.match);
        }
        return this;
    }
    return Query;
}());
export default Query;
