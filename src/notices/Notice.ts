import Level from './Level';

/**
 * Abstract Notice Class
 * 
 * This is designed to return a usable response for the front end
 */
abstract class Notice {

    title: string;
    description: string;
    code: number;

    constructor(
        title: string,
        code: number = 0,
        description: string = '',
    ) {
        this.title = title;
        this.code = code;
        this.description = description;
    }

    protected abstract getCategory = (): Level => null;

    /**
     * Returns Plain Notice Object
     */
    public toObject = (): object => {
        return {
            title: `${this.title}`,
            description: `${this.description}`,
            code: this.code,
            category: `${this.getCategory()}`,
        }
    }

}

export default Notice;
