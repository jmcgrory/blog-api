/**
 * Abstract Notice Class
 *
 * This is designed to return a usable response for the front end
 */
var Notice = /** @class */ (function () {
    function Notice(title, code, description) {
        if (code === void 0) { code = 0; }
        if (description === void 0) { description = ''; }
        var _this = this;
        this.getCategory = function () { return null; };
        /**
         * Returns Plain Notice Object
         */
        this.toObject = function () {
            return {
                title: "" + _this.title,
                description: "" + _this.description,
                code: _this.code,
                category: "" + _this.getCategory(),
            };
        };
        this.title = title;
        this.code = code;
        this.description = description;
    }
    return Notice;
}());
export default Notice;
