import Route from '../Route';
import { MediaModel } from '../../models';

class MediaRoute extends Route {

    protected model: MediaModel;

    public static base: string = '/media';

    constructor() {

        super();

        this.model = this.getRouterModel();

    }

    protected getRouterModel = (): MediaModel => new MediaModel();

}

export default MediaRoute;
