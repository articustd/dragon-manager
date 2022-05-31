import { addScene, getScene, removeScene } from "@GameEngine/Core"
import { logger } from "@util/Logging"

Macro.add('testSceneAdd', {
    skipArgs: false,
    handler: function () {
        if (getScene('EventInteraction'))
            removeScene('EventInteraction')

        let eventData = {
            eventName: 'Test Event',
            interactions: [
                { active: true, name: 'Test Interaction 1', baseCooldown: 100, snippets: ['Test Snippet 1.1', 'Test Snippet 1.2'] },
                { active: true, name: 'Test Interaction 2', baseCooldown: 100, snippets: ['Test Snippet 2.1', 'Test Snippet 2.2'] },
                { active: true, name: 'Test Interaction 3', baseCooldown: 100, snippets: ['Test Snippet 3.1', 'Test Snippet 3.2'] },
            ]
        }

        addScene('EventInteraction', true, eventData)
    }
})