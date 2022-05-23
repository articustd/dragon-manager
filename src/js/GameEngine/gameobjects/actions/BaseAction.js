import _ from "lodash";
import { GameObjects } from "phaser";

export class BaseAction extends GameObjects.GameObject {
    _cooldown
    baseCooldown
    resource
    amount

    constructor(scene, actionData) {
        super(scene, 'Action')

        _.each(actionData, (value, key) => {
            this[key] = value
        })
        this._cooldown = this.baseCooldown
    }

    preUpdate() {
        if (this.cooldown < this.baseCooldown)
            this.cooldown += 1
    }

    get cooldown() { return this._cooldown }
    set cooldown(cooldown) { this._cooldown = cooldown; this.emit(`${this.name}CooldownChange`, {cooldown:this.cooldown, baseCooldown:this.baseCooldown}); }

    gatherResource() { 
        this.cooldown = 0
        this.scene.getResource(this.resource).total += this.amount
    }

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