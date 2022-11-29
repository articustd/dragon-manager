import { getScene } from "@GameEngine/Core"
import { logger } from "@util/Logging"

Macro.add('koboldPopCounter', {
    skipArgs: false,
    handler: function () {
        let $counter = $('<span/>').wiki('?koboldPop')

        getScene('MainLoop').kobold.on('popChange', function (pop) { $counter.text(pop) })

        $counter.appendTo(this.output)
    }
})