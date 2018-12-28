import Notice from "./Notice";
import Level from './Level';

class WarningNotice extends Notice {

    protected getCategory = (): Level => 'warning';

}

export default WarningNotice;
