import { getScene } from "@GameEngine/Core"

Macro.add('golemPopCounter', {
    skipArgs: false,
    handler: function () {
        let $counter = $('<span/>').attr('id','popCounter').wiki('?golemPop')

        getScene('StartGame').golem.on('popChange', function (pop) { $('#popCounter').text(pop) })

        $counter.appendTo(this.output)
    }
})