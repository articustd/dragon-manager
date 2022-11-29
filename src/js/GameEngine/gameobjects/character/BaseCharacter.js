import { logger } from "@util/Logging";
import _ from "lodash";
import { GameObjects } from "phaser";

export class BaseCharacter extends GameObjects.GameObject {
    _health
    healthMax
    attack
    attackSpeed

    constructor(scene, name, type, characterData) {
        super(scene, type)

        this.name = name
        _.each(characterData, (value, key) => { // Set all character data provided
            this[key] = value
        })

        this.healthMax = this._health
    }

    preUpdate(t, dt) { }

    get health() { return this._health }
    set health(health) { this._health = health; this.emit(`${this.name}HealthUpdate`, { health: this.health }) }

    toJSON(data) {
        let json = super.toJSON()
        return { ...json, ...data, health: this.health, healthMax: this.healthMax, attack: this.attack, attackSpeed: this.attackSpeed }
    }

    loadData(data) {
        if (data) {
            // this.purchased = data.purchased
        }
    }
}