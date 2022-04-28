import { GolemGameObject } from "@GameEngine/gameobjects/golem";
import { logger } from "@util/Logging";
import { Scene } from "phaser";

export class StartGame extends Scene {
    golem

    constructor() {
        super("StartGame")
    }

    create() {
        this.golem = this.add.golem()
    }

    update() { }
}