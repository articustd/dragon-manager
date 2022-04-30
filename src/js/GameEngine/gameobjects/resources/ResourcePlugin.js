import { Plugins } from "phaser"
import { TierOneResource } from "./TierOneResource"

export class ResourcePlugin extends Plugins.BasePlugin {
    constructor(pluginManager) {
        super(pluginManager)

        pluginManager.registerGameObject('tierOneResource', this.createTierOneResource)
    }

    createTierOneResource() { return this.updateList.add(new TierOneResource(this.scene)) }
}