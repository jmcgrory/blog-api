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

}

export default UserRoute;
