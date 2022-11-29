import { getScene } from "@GameEngine/Core"
import { logger } from "@util/Logging"

Macro.add('resourceWorkerControl', {
    skipArgs: false,
    handler: function () {
        let [resourceName] = this.args
        let resource = getScene('MainLoop').getResource(resourceName)
        let kobold = getScene('MainLoop').kobold
        let $container = $('<div/>').addClass('button-worker-container')
        let $subBtn = $('<button/>').append($('<i/>').addClass('fa fa-minus')).addClass('button-worker').prop('disabled', resource.workers <= 0)
        let $addBtn = $('<button/>').append($('<i/>').addClass('fa fa-plus')).addClass('button-worker right').prop('disabled', kobold.available <= 0)
        $subBtn.click(() => {
            resource.workers -= 1
            kobold.available += 1
            $subBtn.prop('disabled', resource.workers <= 0)
        })

        $addBtn.click(() => {
            resource.workers += 1
            kobold.available -= 1
            $subBtn.prop('disabled', false)
        })

        kobold.on('availablePopChange', function (available) {
            $addBtn.prop('disabled', available <= 0)
        })

        $container
            .append($subBtn)
            .append($addBtn)
            .appendTo(this.output)
    }
})