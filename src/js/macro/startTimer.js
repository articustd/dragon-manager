import { getScene } from "@GameEngine/Core"
import { GolemGameObject } from "@GameEngine/gameobjects/golem"
import { logger } from "@util/Logging"

Macro.add('startTimer', {
    skipArgs: false,
    handler: function () {
        let golem = getScene('StartGame').golem
        let $btn = $('<button/>').text(`${golem.active ? 'Stop' : 'Start'} Golem Spawner`)
        let $wrapper = $('<div/>')
        
        golem.on('popChange', function (pop) { $('#popCount').text(pop) })
        let $spawnRateInput = $('<div/>')
            .append($('<label/>').attr('for', 'spawnRateInput').wiki('Spawn Rate (# of Ticks to Spawn): '))
            .append($('<input/>').attr('type', 'number').attr('name', 'spawnRateInput').val(golem.spawnRate).change(function () {
                golem.spawnRate = Number($(this).val())
            }))

        let $spawnAmtInput = $('<div/>')
            .append($('<label/>').attr('for', 'spawnAmtInput').wiki('Spawn Amt (# of Golems to Spawn): '))
            .append($('<input/>').attr('type', 'number').attr('name', 'spawnAmtInput').val(golem.spawnAmt).change(function () {
                golem.spawnAmt = Number($(this).val())
            }))

        $btn.click(() => {
            golem.setActive(!golem.active)
            $btn.text(`${golem.active ? 'Stop' : 'Start'} Golem Spawner`)
        })

        $('<div/>').wiki('Game is running at 60 FPS Max, 1 Frame = 1 Tick. 60 Ticks = 1 Second. <br/><br/>').appendTo(this.output)
        $wrapper.append($('<div/>').wiki(`Current Population: `).append($('<span/>').attr('id', 'popCount').wiki(`?golemPop`)))
        $wrapper.append($('<br/>'))

        $spawnRateInput.appendTo($wrapper)
        $spawnAmtInput.appendTo($wrapper)

        $wrapper.appendTo(this.output)
        $btn.appendTo(this.output)

    }
})