import { addScene, getScene, removeScene } from "@GameEngine/Core"
import * as events from '@js/data/events'
import _ from "lodash"

Macro.add('startEvent', {
    skipArgs: false,
    handler: function () {
        let [eventName] = this.args
        if (getScene('EventInteraction'))
            removeScene('EventInteraction')

        addScene('EventInteraction', true, getEvent(eventName))
        Engine.play('eventScenario')
    }
})

function getEvent(eventName) {
    return  _.find(events, {eventName})
}