import { GolemGameObject } from "@GameEngine/gameobjects/golem";
import { logger } from "@util/Logging";
import { Scene } from "phaser";

export class StartGame extends Scene {
    autosaveTick
    golem
    tierOneResource

    constructor() {
        super("StartGame")

        this.autosaveTick = 0
    }

    create() {
        this.golem = this.add.golem()
        this.tierOneResource = this.add.tierOneResource()
    }

    update() {
        this.autosaveTick += 1
        if(this.autosaveTick >= 3600) {
            this.autosaveTick = 0
            Save.autosave.save()
        }
    }

    toJSON() {
        return { golem: this.golem.toJSON(), tierOneResource: this.tierOneResource.toJSON() }
    }

    loadData(data) {
        this.golem.loadData(data.golem)
        this.tierOneResource.loadData(data.tierOneResource)
    }
}