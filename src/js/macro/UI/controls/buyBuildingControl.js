import { getScene } from "@GameEngine/Core"
import { logger } from "@util/Logging"
import _ from "lodash"

Macro.add('buyBuildingControl', {
    skipArgs: false,
    tags: null,
    handler: function () {
        let [buildingName] = this.args
        let building = getScene('MainLoop').getBuilding(buildingName)
        let $button = $('<button/>').wiki(`Buy ${buildingName}`)
        let resourcesAvailable = {}

        $button.click(()=>{
            building.purchased = true
            _.each(building.cost, ({resource, amount})=>{
                getScene('MainLoop').getResource(resource).total -= amount
            })
            $button.remove()
            $(this.output).append($('<div/>').wiki(this.payload[0].contents))
        })

        if(building.purchased)
            $(this.output).append($('<div/>').wiki(this.payload[0].contents))
        else {
            _.each(building.cost, ({resource, amount})=>{
                resourcesAvailable[resource] = (getScene('MainLoop').getResource(resource).total >= amount)
                getScene('MainLoop').getResource(resource).on(`${resource}TotalChange`, function (total) { 
                    resourcesAvailable[resource] = (total >= amount) 
                    checkDisabled($button, resourcesAvailable)
                })
            })
            checkDisabled($button, resourcesAvailable)
            $(this.output).append($button)
        }
    }
})

function checkDisabled($button, resourcesAvailable) {
    let disabled = !_.every(resourcesAvailable, (value)=>{return value})
    $button.prop('disabled', disabled)
}