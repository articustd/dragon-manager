import { getScene } from "@GameEngine/Core"
import { logger } from "@util/Logging"

Macro.add('spendResourceAction', {
    skipArgs: false,
    handler: function () {
        let [spendResourceName, amountSpend, getResourceName, amountGet] = this.args
        let spendResource = findResource(spendResourceName)
        let getResource = findResource(getResourceName)

        let $button = $('<button/>').wiki(`${amountSpend} ${spendResourceName} => ${amountGet} ${getResourceName}`)

        $button.click(() => {
            if (spendResource.enoughAvailable(amountSpend) && getResource.enoughSpace(amountGet)) {
                spendResource.spend(amountSpend)
                getResource.get(amountGet)
            }
        })

        $(this.output).append($button)
    }
})

function findResource(resourceName) {
    if (resourceName === 'golem')
        return getScene('StartGame').golem

    return getScene('StartGame').getResource(resourceName)
}