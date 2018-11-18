import Route from './Route';
import { CategoryModel } from '../models';

class CategoryRoute extends Route {

    protected model: CategoryModel;

    public static base: string = '/category';

    public getModel = (): CategoryModel => new CategoryModel();

    constructor() {

        super();

        this.model = this.getModel();

    }

}

export default CategoryRoute;
