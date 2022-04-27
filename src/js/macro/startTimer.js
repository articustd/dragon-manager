import { getTickInterval, setTickInterval } from "@js/GameEngine/mainloop"
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

        let $spawnRateInput = $('<div/>')
            .append($('<label/>').attr('for', 'spawnRateInput').wiki('Spawn Rate (# of Ticks to Spawn): '))
            .append($('<input/>').attr('type', 'number').attr('name', 'spawnRateInput').val((variables().GolemController)?variables().GolemController.spawnRate:0).change(function () {
                variables().GolemController.spawnRate = Number($(this).val())
            }))

        let $spawnAmtInput = $('<div/>')
            .append($('<label/>').attr('for', 'spawnAmtInput').wiki('Spawn Amt (# of Golems to Spawn): '))
            .append($('<input/>').attr('type', 'number').attr('name', 'spawnAmtInput').val((variables().GolemController)?variables().GolemController.spawnAmt:0).change(function () {
                variables().GolemController.spawnAmt = Number($(this).val())
            }))

        $btn.click(() => {
            if (!variables().GolemController) {
                variables().GolemController = new GolemController()
                // variables().GolemController.name = 'Golems'

                variables().GolemController.registerNewPopListener((val) => {
                    $('#popCount').text(val)
                })
                logger($("div > div > div "))
               
                $spawnRateInput.appendTo($wrapper) 
                $spawnAmtInput.appendTo($wrapper)
                $("input[name='spawnRateInput']").val(variables().GolemController.spawnRate)
                $("input[name='spawnAmtInput']").val(variables().GolemController.spawnAmt)
            }

            $btn.prop('disabled', true)
        })

        $btn.prop('disabled', variables().GolemController)

        $('<div/>').wiki('Game is running at 30 FPS Max, 30 Frames Per Tick = 1 Second <br/><br/>').appendTo(this.output)
        $wrapper.append($('<div/>').wiki(`Current Population: `).append($('<span/>').attr('id', 'popCount').wiki(`?golemPop`)))
        $wrapper.append($('<br/>'))
        $wrapper.append($tickLabel)
        $wrapper.append($tickinput)
        if (variables().GolemController) {
            $spawnRateInput.appendTo($wrapper) 
            $spawnAmtInput.appendTo($wrapper)
        }
        $wrapper.appendTo(this.output)
        $btn.appendTo(this.output)

    }
})