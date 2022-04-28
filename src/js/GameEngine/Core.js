import { logger } from '@util/Logging';
import Phaser from 'phaser'
import _ from 'lodash'
import { StartGame } from './scenes/StartGame';
import { GolemPlugin } from '@GameEngine/gameobjects/golem';

const myCustomCanvas = document.createElement('canvas');

myCustomCanvas.id = 'myCustomCanvas';
myCustomCanvas.style = 'border: 8px solid green';

document.body.appendChild(myCustomCanvas);

//  It's important to set the WebGL context values that Phaser needs:
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
    type: Phaser.WEBGL,
    width: 1,
    height: 1,
    canvas: myCustomCanvas,
    context: myCustomContext,
    fps: {
        target: 30
    },
    plugins: {
        global: [
            { key: 'GolemPlugin', plugin: GolemPlugin, start: true}
        ]
    },
    scene: StartGame
}

const game = new Phaser.Game(phaserConfig)

export function getGame() {
    return game
}

export function getScene(scene) {
    return game.scene.getScene(scene)
}