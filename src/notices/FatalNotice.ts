import Notice from "./Notice";
import Level from './Level';

class FatalNotice extends Notice {

    protected getCategory = (): Level => 'fatal';

}

export default FatalNotice;
