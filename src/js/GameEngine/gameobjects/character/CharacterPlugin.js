import { Plugins } from "phaser"
import { BaseCharacter } from "./BaseCharacter"

export class CharacterPlugin extends Plugins.BasePlugin {
    constructor(pluginManager) {
        super(pluginManager)

        pluginManager.registerGameObject('character', this.character)
    }

    character(name, type, characterData) { return this.updateList.add(new BaseCharacter(this.scene, name, type, characterData)) }
}