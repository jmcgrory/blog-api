import Route from './Route';
import { ArticleModel } from '../models';

class ArticleRoute extends Route {

    protected model: ArticleModel;

    public static base: string = '/article';

    public getModel = (): ArticleModel => new ArticleModel();

    constructor() {

        super();

        this.model = this.getModel();

    }

}

export default ArticleRoute;
