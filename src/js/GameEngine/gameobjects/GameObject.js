export class GameObject {
    constructor() {
        this._name = ''
    }

    start = () => { }
    update = () => { }
    end = () => { }

    set name(name) { this._name = name }
    get name() { return this._name }
}