import { game, getScene } from "@GameEngine/Core"
import { logger } from "@util/Logging"

Macro.add('tierOneResourceCounter', {
    skipArgs: false,
    handler: function () {
        let $counter = $('<span/>').wiki('?tierOneResourceTotal')

        getScene('StartGame').tierOneResource.on('TierOneTotalChange', function (total) { $counter.text(total) })

        $counter.appendTo(this.output)
    }
})