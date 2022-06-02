import { getScene } from "@GameEngine/Core"
import { logger } from "@util/Logging"
import _ from "lodash"

Macro.add('interactionList', {
    skipArgs: false,
    handler: function () {
        let event = getScene('EventInteraction')
        
        _.each(event.interactions, (interaction) => {
            let $btn = $('<button/>').wiki(interaction.name).click(() => { 
                interaction.fire()
                if(interaction.final) {
                    let $returnBtn = $('<button/>').wiki('Return').click(() => {
                        Engine.play(variables().return)
                    })
                    $(this.output).append($returnBtn)
                }
            })
            if (!interaction.active)
                $btn.addClass('hide')
            interaction.on(`${interaction.name}ActiveChange`, (active) => {
                if (active)
                    $btn.removeClass('hide')
                else
                    $btn.addClass('hide')
            })

            interaction.on(`${interaction.name}CounterChange`, (counter) => {
                $btn.prop('disabled', interaction.isDisabled())
            })
            $btn.prop('disabled', interaction.isDisabled())
            $(this.output).append($btn)
        })
    }
})