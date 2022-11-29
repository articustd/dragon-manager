import { getScene } from "@GameEngine/Core"
import { logger } from "@util/Logging"

Macro.add('attackBar', {
    skipArgs: false,
    handler: function () {
        let [char, right] = this.args
        let character = getScene('MainLoop').getCharacter(char)
        logger(character)
        let $barContainer = $('<div/>').addClass('attack-bar')
        let $barText = $('<span/>').addClass('attack-bar text').wiki(character.name)
        let $bar = $('<div/>').addClass('attack-bar fill').css({ width: getWidth(character.health, character.healthMax)})

        character.on(`${char}HealthUpdate`, function (health) { $bar.css({ 'width': getWidth(health, character.healthMax) }) })

        if (!_.isNull(this.payload) && this.payload[0])
            $barText.wiki(this.payload[0].contents)

        $barContainer
            .append($barText)
            .append($bar)
            .appendTo(this.output)
    }
})

function getWidth(curr, max) {
    return (curr > 0) ? _.round((curr / max) * 100, 2) + '%' : '0%'
}