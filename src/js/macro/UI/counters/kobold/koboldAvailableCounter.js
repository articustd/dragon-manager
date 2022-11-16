import { getScene } from "@GameEngine/Core"
import { logger } from "@util/Logging"

Macro.add('koboldAvailableCounter', {
    skipArgs: false,
    handler: function () {
        let $counter = $('<span/>').wiki('?koboldAvailable')

        getScene('StartGame').kobold.on('availablePopChange', function (available) { $counter.text(available) })

        $counter.appendTo(this.output)
    }
})