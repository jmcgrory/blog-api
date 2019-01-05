interface QueryPayload {
    match: string,
    limit: string,
}

class Query {

    private match: object;
    private limit: number;

    public constructor(query: QueryPayload) {
        if (query.match) {
            this.setmatch(query.match);
        }
        return this;
    }

    private setmatch = (match: string): void => {
        const stringmatch = [ ...match.split(',') ];
        this.match = stringmatch.reduce((previous, current) => {
            const split = current.split(':');
            previous[split[0]] = split[1];
            return previous;
        }, {});
        console.log(this.match);
    }

    /**
     * This has placeholder functionality currently
     * @todo implement fully
     */
    public getParams = (): object => {
        return { ...this.match };
    }

}

export default Query;
