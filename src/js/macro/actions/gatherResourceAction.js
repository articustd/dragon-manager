import { getScene } from "@GameEngine/Core"

Macro.add('gatherResourceAction', {
    skipArgs: false,
    handler: function () {
        let [actionName] = this.args
        let action = getScene('MainLoop').getAction(actionName)
        let $barContainer = $('<div/>').addClass('tick-bar-container')
        let $buttonText = $('<span/>').addClass('tick-bar-text-diff').wiki(actionName)
        let $bar = $('<div/>').addClass('tick-bar-simple').css({ 'width': getWidth(action.cooldown, action.baseCooldown)})

        action.on(`${actionName}CooldownChange`, function({cooldown, baseCooldown}) {
            $bar.css({ 'width': getWidth(cooldown, baseCooldown) })
            if (cooldown === baseCooldown) {
                barClick($barContainer, action)
            }
        })

        $barContainer.append($buttonText).append($bar)

        if(action.cooldown === action.baseCooldown)
            barClick($barContainer, action)

        $(this.output).append($barContainer)
    }
})

function getWidth(curr, max) {
    return (curr > 0) ? _.round((curr / max) * 100, 2)+'%' : '0%'
}

function barClick($barContainer, action) {
    $barContainer.addClass('tick-bar-action')
    $barContainer.click(()=>{
        action.gatherResource()
        $barContainer.removeClass('tick-bar-action')
        $barContainer.off('click')
    })
}