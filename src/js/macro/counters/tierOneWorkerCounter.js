import { game, getScene } from "@GameEngine/Core"
import { logger } from "@util/Logging"

Macro.add('tierOneWorkerCounter', {
    skipArgs: false,
    handler: function () {
        let $counter = $('<span/>').wiki('?tierOneWorkerTotal')

        getScene('StartGame').tierOneResource.on('TierOneWorkerChange', function (workers) { $counter.text(workers) })

        $counter.appendTo(this.output)
    }
})