import { logger } from "@util/Logging";
import { addUpdate } from "./gameloop";

export class GolemController {
    population = 1
    spawnTime = 1
    currSpawnTime;

    constructor() {
        if (variables().population)
            this.population = variables().population
        else
            variables().population = this.population

        this.currSpawnTime = this.spawnTime
        this.start()
    }

    start = () => {
        addUpdate(this.update)
    }

    update = (delta) => {
        this.currSpawnTime -= 1
        if (this.currSpawnTime <= 0) {
            this.currSpawnTime = this.spawnTime
            this.population += 1
            this.popListener(this.population)
            variables().population = this.population
            // logger(`Current Population: ${this.population}`)
        }
    }

    end = () => {

    }

    get population() {return this.population}
    set population(val) {
        logger(`here`)
        this.population = val
        popListener(val)
    }

    updatePop = (val) => {this.population = val}
    popListener = (val) => { }
    registerNewPopListener = (externalListenerFunction) => { this.popListener = externalListenerFunction }
    // get currSpawnTime() {return this.currSpawnTime}
    // set currSpawnTime(x) {this.currSpawnTime = x}
    // get spawnTime() {return this.spawnTime}
}

