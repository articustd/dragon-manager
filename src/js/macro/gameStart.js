import { getScene } from "@GameEngine/Core"

Macro.add('gameStart', {
    skipArgs: false,
    handler: function () {
        getScene('StartGame').kobold.setActive(true)
        variables().started = true
    }
})