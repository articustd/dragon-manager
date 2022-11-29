import { addScene, getScene, removeScene } from "@GameEngine/Core"
import * as events from '@js/data/events'
import { logger } from "@util/Logging"
import _ from "lodash"

Macro.add('startEvent', {
    skipArgs: false,
    handler: function () {
        let [eventName, kobolds] = this.args
        let kobold = getScene('MainLoop').kobold
        let event = getEvent(eventName)

        if(kobolds)
            event = {...event, kobolds}

        logger({event})

        if (getScene('EventInteraction'))
            removeScene('EventInteraction')
        addScene('EventInteraction', true, event)

        let $btn = $('<button/>').wiki(eventName).click(() => {
            Engine.play('eventScenario')
        })

        $btn.prop('disabled', !kobold.enoughAvailable(kobolds))
        kobold.on('availablePopChange', () => {
            $btn.prop('disabled', !kobold.enoughAvailable(kobolds))
        })

        $(this.output).append($btn)
    }
})

function getEvent(eventName) {
    return _.find(events, { eventName })
}