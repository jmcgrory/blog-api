import Route from '../Route';
import { Model, ArticleModel } from '../../models';

class ArticleRoute extends Route {

    protected model: ArticleModel;
    public static base: string = '/article';
    protected useDefaultMethods: boolean = true;

    constructor() {
        super();
        this.model = this.getRouterModel();
        this.bindRouteMethods();
    }

    protected getRouterModel = (): ArticleModel => new ArticleModel();

}

export default ArticleRoute;
