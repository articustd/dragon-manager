import { getScene } from "@GameEngine/Core"

Macro.add('findResourceAction', {
    skipArgs: false,
    handler: function () {
        let [resourceName, amount] = this.args
        let resource = getScene('StartGame').getResource(resourceName)
        let $button = $('<button/>').wiki(`Get ${amount} ${resourceName}`)

        $button.click(()=>{
            resource.total += amount
        })

        $(this.output).append($button)
    }
})
