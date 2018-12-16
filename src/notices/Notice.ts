import Level from './Level';

/**
 * Abstract Notice Class
 * This is designed to return a usable response for the front end
 * @property {number} code A unique identifier for this Notice 
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
        const plainObject = {
            title: `${this.title}`,
            category: `${this.getCategory()}`
        }
        if (this.code) {
            plainObject['code'] = this.code;
        }
        if (this.code) {
            plainObject['description'] = this.description;
        }
        return plainObject;
    }

}

export default Notice;
