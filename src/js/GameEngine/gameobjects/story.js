import { GameObjects, Plugins } from "phaser";

export class StoryObject extends GameObjects.GameObject {
    storySnippets

    constructor(scene) {
        super(scene, 'Story')

        this.storySnippets = []
    }

    preUpdate(t, dt) { }

    push(snippet) {
        this.storySnippets.push(snippet)
        this.emit('StoryUpdate', snippet)
    }
}

export class StoryPlugin extends Plugins.BasePlugin {
    constructor(pluginManager) {
        super(pluginManager)

        pluginManager.registerGameObject('story', this.createStory)
    }

    createStory() { return this.updateList.add(new StoryObject(this.scene)) }
}