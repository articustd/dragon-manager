import { addScene, getScene, removeScene } from "@GameEngine/Core"
import { logger } from "@util/Logging"

Macro.add('testSceneAdd', {
    skipArgs: false,
    handler: function () {
        if(getScene('EventInteraction'))
            removeScene('EventInteraction')

        addScene('EventInteraction', true, {})
    }
})