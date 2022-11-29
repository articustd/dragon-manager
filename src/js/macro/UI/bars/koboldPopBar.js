import { getScene } from "@GameEngine/Core"
import { logger } from "@util/Logging"
import _ from "lodash"

Macro.add('koboldPopBar', {
    skipArgs: false,
    tags: null,
    handler: function () {
        let kobold = getScene('MainLoop').kobold
        let $barContainer = $('<div/>').css({'width': '200px', 'height': '30px', 'position': 'relative'})
        let $barText = $('<span/>').css({'z-index':'1', 'mix-blend-mode':'difference', 'padding': '5px'})
        let $bar = $('<div/>').css({ 'width': getWidth(kobold.currSpawnRate, kobold.spawnRate), 'height': '100%', 'background-color': 'white', 'position': 'absolute', 'top': '0px', 'left': '0px', 'z-index': '-1' })

        kobold.on('popTick', function ({ currSpawnRate, spawnRate }) { $bar.css({ 'width': getWidth(currSpawnRate, spawnRate) }) })
        
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