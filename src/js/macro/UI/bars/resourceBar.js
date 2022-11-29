import { getScene } from "@GameEngine/Core"
import { logger } from "@util/Logging"
import _ from "lodash"

Macro.add('resourceBar', {
    skipArgs: false,
    tags: null,
    handler: function () {
        let [resourceName] = this.args
        let resource = getScene('MainLoop').getResource(resourceName)
        let $barContainer = $('<div/>').addClass('tick-bar-container')
        let $barText = $('<span/>').addClass('tick-bar-text-diff')
        let $bar = $('<div/>').addClass('tick-bar-simple').css({ 'width': getWidth(resource.tick, resource.spawnRate)})
        
        resource.on(`${resourceName}Tick`, function ({ tick, spawnRate }) { $bar.css({ 'width': getWidth(tick, spawnRate) }) })
        
        if(this.payload[0])
            $barText.wiki(this.payload[0].contents)

        $barContainer
            .append($barText)
            .append($bar)
            .appendTo(this.output)
    }
})

function getWidth(curr, max) {
    return (curr > 0) ? _.round((curr / max) * 100, 2)+'%' : '0%'
}