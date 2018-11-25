import Route from '../Route';
import { UserModel } from '../../models';
import RouteMethod from '../RouteMethod';

class UserRoute extends Route {

    protected model: UserModel;
    public static base: string = '/user';
    protected useDefaultMethods: boolean = false;

    constructor() {
        super();
        this.model = this.getRouterModel();
    }

    protected getRouterModel = (): UserModel => new UserModel();

    public static authenticate = (id: number, callback: Function) => {
        return Promise.resolve({ lol: 'data' });
    }

}

export default UserRoute;
