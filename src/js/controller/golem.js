import { logger } from "@util/Logging";
import { addUpdate } from "./gameloop";

export class GolemController {
    population = 1
    spawnRate = 1
    spawnAmt = 1
    currSpawnRate;

    constructor() {
        if (variables().population)
            this.population = variables().population
        else
            variables().population = this.population

        this.currSpawnRate = this.spawnRate
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
            this.popListener(this.population)
            variables().population = this.population
        }
    }

    end = () => {

    }

    get population() { return this.population }
    set population(val) {
        this.population = val
        popListener(val)
    }

    set spawnAmt(val) { this.spawnAmt = val }

    updatePop = (val) => { this.population = val }
    popListener = (val) => { }
    registerNewPopListener = (externalListenerFunction) => { this.popListener = externalListenerFunction }
    // get currSpawnTime() {return this.currSpawnTime}
    // set currSpawnTime(x) {this.currSpawnTime = x}
    get spawnRate() { return this.spawnRate }
    set spawnRate(val) { this.spawnRate = val }

    get spawnAmt() { return this.spawnAmt }
    set spawnAmt(val) { this.spawnAmt = val }
}

