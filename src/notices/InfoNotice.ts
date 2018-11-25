import Notice from "./Notice";
import Level from './Level';

class InfoNotice extends Notice {

    protected getCategory = (): Level => 'info';

}

export default InfoNotice;
