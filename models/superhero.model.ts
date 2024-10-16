export default class SuperheroModel {

    name?: string;
    email?: string;
    realName?: string;

    constructor(info: {
        name?: string,
        email?: string,
        realName?: string
    }) {
        this.name = info.name;
        this.email = info.email;
        this.realName = info.realName;
    }
}