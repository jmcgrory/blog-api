/**
 * Abstract Notice Class
 * This is designed to return a usable response for the front end
 * @property {number} code A unique identifier for this Notice
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
            var plainObject = {
                title: "" + _this.title,
                category: "" + _this.getCategory()
            };
            if (_this.code) {
                plainObject['code'] = _this.code;
            }
            if (_this.code) {
                plainObject['description'] = _this.description;
            }
            return plainObject;
        };
        this.title = title;
        this.code = code;
        this.description = description;
    }
    return Notice;
}());
export default Notice;
