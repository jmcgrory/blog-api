import Notice from "./Notice";
import Level from './Level';

class DebugNotice extends Notice {

    protected getCategory = (): Level => 'debug';

}

export default DebugNotice;
