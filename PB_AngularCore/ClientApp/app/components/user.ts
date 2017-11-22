export class User {

    /*
    id: string;
    private firstName: string;
    private lastName: string;

    constructor(id: string, firstName: string, lastName: string = "optionalVar") {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }*/

    // Short hand same as above
    constructor(private _firstName: string, private _lastName: string) {
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        if (value.length <= 0)
            throw new Error("Name must be longer than 0 characters");
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }
    
    set lastName(value) {
        if (value.length <= 0)
            throw new Error("Name must be longer than 0 characters");
        this._lastName = value;
    }
}