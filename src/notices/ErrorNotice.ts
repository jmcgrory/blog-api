import Notice from "./Notice";
import Level from './Level';

class ErrorNotice extends Notice {

    protected getCategory = (): Level => 'error';

}

export default ErrorNotice;
