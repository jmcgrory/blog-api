import Route from './Route';
import { Model, ArticleModel } from '../models';

class ArticleRoute extends Route {

    protected model: ArticleModel;

    public static base: string = '/article';

    constructor() {
        super();
        this.model = this.getRouterModel();
        this.router.get('/getModel', this.getModel);
    }

    protected getRouterModel = (): ArticleModel => new ArticleModel();

}

export default ArticleRoute;
