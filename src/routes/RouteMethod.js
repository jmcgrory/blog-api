var RouteMethod = /** @class */ (function () {
    function RouteMethod(url, type, method, auth) {
        if (auth === void 0) { auth = false; }
        this.url = url;
        this.type = type;
        this.value = method;
        this.auth = auth;
    }
    return RouteMethod;
}());
export default RouteMethod;
