type ReqType = 'GET' | 'POST';

class RouteMethod {
    url: string;
    type: ReqType;
    value: Function;
    auth: boolean;
    constructor(
        url: string,
        type: ReqType,
        method: Function,
        auth: boolean = false
    ) {
        this.url = url;
        this.type = type;
        this.value = method;
        this.auth = auth;
    }
}

export default RouteMethod;
