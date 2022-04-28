import { logger } from "@util/Logging";
import Phaser from "phaser";

export class GolemGameObject extends Phaser.GameObjects.GameObject {
    _population
    spawnRate
    spawnAmt
    currSpawnRate

    constructor(scene) {
        super(scene, 'golem')

        if (variables().population)
            this._population = variables().population
        else
            this._population = 1

        this.spawnRate = 60
        this.spawnAmt = 1
        this.currSpawnRate = this.spawnRate
        this.active = false
    }

    create() { }

    preUpdate() {
        this.currSpawnRate -= 1
        if (this.currSpawnRate <= 0) {
            this.currSpawnRate = this.spawnRate
            this.population += this.spawnAmt
        }
    }

    get population() { return this._population }
    set population(population) { this._population = population; this.emit('popChange', population); }
}

export class GolemPlugin extends Phaser.Plugins.BasePlugin {
    constructor(pluginManager) {
        super(pluginManager)

        pluginManager.registerGameObject('golem', this.createGolem)
    }

    createGolem() { return this.updateList.add(new GolemGameObject(this.scene)) }
}