import _ from 'lodash'

var lastFrameTimeMs = 0, // The last time the loop was run
    maxFPS = 30, // The maximum FPS we want to allow
    timestep = 1000 / 60,
    delta = 0,
    fps = 60,
    framesThisSecond = 0,
    lastFpsUpdate = 0,
    tick = 0

function mainLoop(timestamp) {
    if (timestamp < lastFrameTimeMs + timestep) {
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
        update(delta)
        delta -= timestep

        if(++numUpdateSteps >=240) { // sanity check
            panic() // fix state
            break // bail
        }
    }

    // draw()
    requestAnimationFrame(mainLoop)
}

function update(delta) {
    tick += _.floor(delta / timestep)
    console.log(`Tick: ${tick}`)
}

function panic() {
    console.log(`PANIC`)
    delta = 0 // discard unsimulated time
    // do anything else that needs to bring state up to where it needs to be
}

export function startGame() {
    requestAnimationFrame(mainLoop)
}