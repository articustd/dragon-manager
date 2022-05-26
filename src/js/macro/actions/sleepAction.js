import { getScene } from "@GameEngine/Core"

Macro.add('sleepAction', {
    skipArgs: false,
    handler: function () {
        let [amount] = this.args
        let action = getScene('StartGame').getAction('Sleep')
        let $button = $('<button/>').wiki(`Sleep ${amount} Hours`)

        $button.click(()=>{
            action.timeSkipHour(amount)
        })

        $(this.output).append($button)
    }
})
