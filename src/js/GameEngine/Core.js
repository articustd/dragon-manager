import { logger } from '@util/Logging';
import { WEBGL, Game } from 'phaser'
import { StartGame } from './scenes/StartGame';
import { GolemPlugin } from '@GameEngine/gameobjects/golem';
import { ResourcePlugin } from './gameobjects/resources/ResourcePlugin';
import { BuildingPlugin } from './gameobjects/buildings/BuildingPlugin';
import { ActionPlugin } from './gameobjects/actions/ActionPlugin';

const myCustomCanvas = document.createElement('canvas');

myCustomCanvas.id = 'myCustomCanvas';
myCustomCanvas.style = 'border: 8px solid green';

document.body.appendChild(myCustomCanvas);

const contextCreationConfig = {
    alpha: false,
    depth: false,
    antialias: true,
    premultipliedAlpha: true,
    stencil: true,
    preserveDrawingBuffer: false,
    failIfMajorPerformanceCaveat: false,
    powerPreference: 'default'
};

const myCustomContext = myCustomCanvas.getContext('webgl', contextCreationConfig);

let phaserConfig = {
    type: WEBGL,
    width: 1,
    height: 1,
    canvas: myCustomCanvas,
    context: myCustomContext,
    // fps: {
    //     target: 30,
    //     forceSetTimeOut: true
    // },
    plugins: {
        global: [
            { key: 'GolemPlugin', plugin: GolemPlugin, start: true },
            { key: 'ResourcePlugin', plugin: ResourcePlugin, start: true },
            { key: 'BuildingPlugin', plugin: BuildingPlugin, start: true },
            { key: 'ActionPlugin', plugin: ActionPlugin, start: true }
        ]
    },
    scene: StartGame
}

const game = new Game(phaserConfig)

function getScene(scene) {
    return game.scene.getScene(scene)
}

export { game, getScene }