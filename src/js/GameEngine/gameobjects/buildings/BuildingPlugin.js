import { Plugins } from "phaser"
import { BaseBuilding } from "./BaseBuilding"

export class BuildingPlugin extends Plugins.BasePlugin {
    constructor(pluginManager) {
        super(pluginManager)

        pluginManager.registerGameObject('building', this.building)
    }

    building() { return this.updateList.add(new BaseBuilding(this.scene)) }
}