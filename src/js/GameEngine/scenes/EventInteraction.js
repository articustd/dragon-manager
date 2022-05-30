import { logger } from "@util/Logging";
import { Scene } from "phaser";

export class EventInteraction extends Scene {
    constructor() {
        super("EventInteraction")
    }

    create() { }

    update(t, dt) { }

    toJSON() { return {} }

    loadData(data) { logger('Here') }
}