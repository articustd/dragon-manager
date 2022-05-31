import { GameObjects } from "phaser";
import { logger } from "@util/Logging";
import _ from "lodash";

export class BaseInteraction extends GameObjects.GameObject {
    _cooldown
    baseCooldown
    snippets
    interval

    constructor(scene, interactionData) {
        super(scene, 'Interaction')

        _.each(interactionData, (value, key) => {
            this[key] = value
        })
        this._cooldown = this.baseCooldown + 1
        this.interval = _.floor(this._cooldown / this.snippets.length)
    }

    preUpdate(t, dt) {
        if (this.cooldown <= this.baseCooldown)
            this.cooldown += 1
        if (this.cooldown % this.interval === 0)
            this.scene.story.push(_.sample(this.snippets))
    }

    get cooldown() { return this._cooldown }
    set cooldown(cooldown) { this._cooldown = cooldown; this.emit(`${this.name}CooldownChange`, {cooldown:this.cooldown, baseCooldown:this.baseCooldown}); }

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