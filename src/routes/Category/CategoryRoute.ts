import Route from '../Route';
import { CategoryModel } from '../../models';

class CategoryRoute extends Route {

    protected model: CategoryModel;
    public static base: string = '/category';
    protected useDefaultMethods: boolean = true;

    constructor() {
        super();
        this.model = this.getRouterModel();
    }

    protected getRouterModel = (): CategoryModel => new CategoryModel();

}

export default CategoryRoute;
