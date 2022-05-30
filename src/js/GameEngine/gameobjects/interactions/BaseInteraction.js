import { GameObjects } from "phaser";
import { logger } from "@util/Logging";
import _ from "lodash";

export class BaseInteraction extends GameObjects.GameObject {
    _cooldown
    baseCooldown

    constructor(scene, interactionData) {
        super(scene, 'Interaction')

        _.each(interactionData, (value, key) => {
            this[key] = value
        })
        this._cooldown = this.baseCooldown
    }

    preUpdate(t, dt) {
        if (this.cooldown < this.baseCooldown)
            this.cooldown += 1
    }

    get cooldown() { return this._cooldown }
    set cooldown(cooldown) { this._cooldown = cooldown; this.emit(`CooldownChange`, {cooldown:this.cooldown, baseCooldown:this.baseCooldown}); }

    toJSON(data) {
        let json = super.toJSON()
        return { ...json, ...data, cooldown: this.cooldown }
    }

    loadData(data) {
        if (data) {
            this._cooldown = data.cooldown
        }
    }
}