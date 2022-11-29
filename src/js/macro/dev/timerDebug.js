import { getScene } from "@GameEngine/Core"
import { logger } from "@util/Logging"

Macro.add('timerDebug', {
    skipArgs: false,
    handler: function () {
        let kobold = getScene('MainLoop').kobold
        let goldResource = getScene('MainLoop').getResource('Gold')
        let $btn = $('<button/>').text(`${kobold.active ? 'Stop' : 'Start'} Kobold Spawner`)
        let $wrapper = $('<div/>')

        let $spawnRateInput = $('<div/>')
            .append($('<label/>').attr('for', 'spawnRateInput').wiki('Spawn Rate (# of Ticks to Spawn): '))
            .append($('<input/>').attr('type', 'number').attr('name', 'spawnRateInput').val(kobold.spawnRate).change(function () {
                kobold.spawnRate = Number($(this).val())
            }))

        let $spawnAmtInput = $('<div/>')
            .append($('<label/>').attr('for', 'spawnAmtInput').wiki('Spawn Amt (# of Kobolds to Spawn): '))
            .append($('<input/>').attr('type', 'number').attr('name', 'spawnAmtInput').val(kobold.spawnAmt).change(function () {
                kobold.spawnAmt = Number($(this).val())
            }))

        let $goldSpawnRateInput = $('<div/>')
            .append($('<label/>').attr('for', 'goldSpawnRateInput').wiki('Gold Spawn Rate: '))
            .append($('<input/>').attr('type', 'number').attr('name', 'goldSpawnRateInput').val(goldResource.spawnRate).change(function () {
                goldResource.spawnRate = Number($(this).val())
            }))

        $btn.click(() => {
            kobold.setActive(!kobold.active)
            $btn.text(`${kobold.active ? 'Stop' : 'Start'} Kobold Spawner`)
        })

        $('<div/>').wiki('Game is running at 60 FPS Max, 1 Frame = 1 Tick. 60 Ticks = 1 Second. <br/><br/>').appendTo(this.output)
        $wrapper.append($('<div/>').wiki(`Current Population: `).append($('<span/>').attr('id', 'popCount').wiki(`<<koboldPopCounter>>`)))
        $wrapper.append($('<br/>'))

        $spawnRateInput.appendTo($wrapper)
        $spawnAmtInput.appendTo($wrapper)
        $wrapper.append($('<br/>'))

        $goldSpawnRateInput.appendTo($wrapper)

        $wrapper.appendTo(this.output)
        $btn.appendTo(this.output)

    }
})