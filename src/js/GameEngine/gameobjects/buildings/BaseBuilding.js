import { GameObjects } from "phaser";

export class BaseBuilding extends GameObjects.GameObject {
    constructor(scene) {
        super(scene,'Building')
    }

    preUpdate() {}

    toJSON(data) {
        let json = super.toJSON()
        return {...json, ...data}
    }

    loadData(data) {
        if(data) { }
    }
}