import { logger } from "@util/Logging";
import { addUpdate } from "../GameEngine/mainloop";

export class GolemController {
    _population = 1
    _spawnRate = 1
    _spawnAmt = 1
    _currSpawnRate;

    constructor() {
        // super()

        if (variables().population)
            this.population = variables().population
        else
            variables().population = this.population

        this._currSpawnRate = this._spawnRate
        this.start()
    }

    start = () => {
        addUpdate(this.update)
    }

    update = (delta) => {
        this.currSpawnRate -= 1
        if (this.currSpawnRate <= 0) {
            this.currSpawnRate = this.spawnRate
            this.population += this.spawnAmt
        }
    }

    get population() { return this._population }
    set population(val) {
        this._population = val
        variables().population = val
        this.popListener(val)
    }

    popListener = (val) => { }
    registerNewPopListener = (externalListenerFunction) => { this.popListener = externalListenerFunction }
    get currSpawnRate() {return this._currSpawnRate}
    set currSpawnRate(x) {this._currSpawnRate = x}
    get spawnRate() { return this._spawnRate }
    set spawnRate(val) { this._spawnRate = val }

    get spawnAmt() { return this._spawnAmt }
    set spawnAmt(val) { this._spawnAmt = val }
}