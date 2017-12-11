export class Poll {
    title: string;
    options: string[];



    constructor(obj: Object = {}) {
        Object.assign(this, obj);
    }
}