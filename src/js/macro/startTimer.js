import { getTickInterval, setTickInterval } from "@controller/gameloop"
import { GolemController } from "@controller/golem"
import { logger } from "@util/Logging"

Macro.add('startTimer', {
    skipArgs: false,
    handler: function () {
        let $btn = $('<button/>').wiki(`Start Golem Spawner`)
        let $wrapper = $('<div/>')
        let $tickLabel = $('<label/>').attr('for', 'tickInput').wiki('Frames Per Tick: ')
        let $tickinput = $('<input/>').attr('type', 'number').attr('name', 'tickInput').val(getTickInterval()).change(function () {
            setTickInterval(Number($(this).val()))
        })

        $btn.click(() => {
            if (!variables().GolemController) {
                variables().GolemController = new GolemController()

                variables().GolemController.registerNewPopListener((val) => {
                    $('#popCount').text(val)
                })

                $('<div/>')
                    .append($('<label/>').attr('for', 'spawnRateInput').wiki('Spawn Rate (# of Ticks to Spawn): '))
                    .append($('<input/>').attr('type', 'number').attr('name', 'spawnRateInput').val(variables().GolemController.spawnRate).change(function () {
                        variables().GolemController.spawnRate = Number($(this).val())
                    }))
                    .appendTo($wrapper)

                $('<div/>')
                    .append($('<label/>').attr('for', 'spawnAmtInput').wiki('Spawn Amt (# of Golems to Spawn): '))
                    .append($('<input/>').attr('type', 'number').attr('name', 'spawnAmtInput').val(variables().GolemController.spawnAmt).change(function () {
                        variables().GolemController.spawnAmt = Number($(this).val())
                    }))
                    .appendTo($wrapper)
            }
        })

        $('<div/>').wiki('Game is running at 30 FPS Max, 30 Frames Per Tick = 1 Second').appendTo(this.output)
        $wrapper.append($('<div/>').wiki(`Current Population: `).append($('<span/>').attr('id', 'popCount').wiki(`?golemPop`)))
        $wrapper.append($tickLabel)
        $wrapper.append($tickinput)
        $wrapper.appendTo(this.output)
        
        $btn.appendTo(this.output)

    }
})