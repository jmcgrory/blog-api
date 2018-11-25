import Notice from "./Notice";
import Level from './Level';

class SuccessNotice extends Notice {

    protected getCategory = (): Level => 'success';

}

export default SuccessNotice;
