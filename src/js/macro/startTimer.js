import { addUpdate } from "@controller/gameloop"
import { GolemController } from "@controller/golem"
import { logger } from "@util/Logging"

Macro.add('startTimer', {
    skipArgs: false,
    handler: function () {
        let $btn = $('<button/>').wiki(`Start Golem Spawner`)

        $btn.click(() => {
            if (!variables().GolemController)
                variables().GolemController = new GolemController()


            variables().GolemController.registerNewPopListener((val) => {
                logger(`Start Time Macro: ${val}`)
                $('#popCount').text(val)
            })
        })


        $('<div/>').wiki(`Current Population: `).append($('<span/>').attr('id','popCount').wiki(`?golemPop`)).appendTo(this.output)
        $btn.appendTo(this.output)

    }
})

function testUpdate() {
    logger(`Test Update`)
}