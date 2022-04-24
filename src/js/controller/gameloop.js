import { logger } from '@util/Logging';
import _ from 'lodash'

var lastFrameTimeMs = 0, // The last time the loop was run
    maxFPS = 30, // The maximum FPS we want to allow
    timestep = 1000 / 30,
    delta = 0,
    fps = 60,
    framesThisSecond = 0,
    lastFpsUpdate = 0,
    tick = 0,
    tickInterval = 30,
    tickProgress = 0,
    updates = []

function mainLoop(timestamp) {
    if (timestamp < lastFrameTimeMs + (1000/maxFPS)) {
        requestAnimationFrame(mainLoop)
        return;
    }

    delta += timestamp - lastFrameTimeMs // get delta time since last frame
    lastFrameTimeMs = timestamp
    
    if (timestamp > lastFpsUpdate + 1000) { // update every second
        fps = 0.25 * framesThisSecond + (1-0.25) * fps // new fps

        lastFpsUpdate = timestamp
        framesThisSecond = 0
    }
    framesThisSecond++

    let numUpdateSteps = 0
    while (delta >= timestep) {
        tickProgress += 1
        if(tickProgress >= tickInterval){
            update(delta)
            tickProgress = 0
        }
        delta -= timestep
        if(++numUpdateSteps >= 240) { // sanity check
            panic() // fix state
            break // bail
        }
    }

    // draw()
    requestAnimationFrame(mainLoop)
}

function update(delta) {
    tick += 1

    _.each(updates, (func)=>{
        func(delta)
    })

    logger(`Tick: ${tick}`)
}

function panic() {
    logger(`PANIC`)
    delta = 0 // discard unsimulated time
    // do anything else that needs to bring state up to where it needs to be
}

export function startGame() {
    requestAnimationFrame(mainLoop)
}

export function addUpdate(update) {
    updates.push(update)
}