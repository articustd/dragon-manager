import { GolemGameObject } from "@GameEngine/gameobjects/golem";
import { logger } from "@util/Logging";
import { Scene } from "phaser";

export class StartGame extends Scene {
    golem
    tierOneResource

    constructor() {
        super("StartGame")
    }

    create() {
        this.golem = this.add.golem()
        this.tierOneResource = this.add.tierOneResource()
    }

    update() { }

    toJSON() {
        return { golem: this.golem.toJSON(), tierOneResource: this.tierOneResource.toJSON() }
    }

    loadData(data) {
        this.golem.loadData(data.golem)
        this.tierOneResource.loadData(data.tierOneResource)
    }
}