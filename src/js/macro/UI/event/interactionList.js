import { getScene } from "@GameEngine/Core"
import { logger } from "@util/Logging"
import _ from "lodash"

Macro.add('interactionList', {
    skipArgs: false,
    handler: function () {
        let event = getScene('EventInteraction')

        _.each(event.getActiveInteractions(), (interaction) => {
            $(this.output).append($('<button/>').wiki(interaction.name).click(() => { interaction.cooldown = 0 }))
        })
    }
})