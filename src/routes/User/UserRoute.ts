import Route from '../Route';
import { UserModel } from '../../models';

class UserRoute extends Route {

    protected model: UserModel;
    public static base: string = '/user';

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
