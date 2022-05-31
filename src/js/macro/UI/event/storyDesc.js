import { getScene } from "@GameEngine/Core"
import { logger } from "@util/Logging"

Macro.add('storyDesc', {
    skipArgs: false,
    handler: function () {
        let story = getScene('EventInteraction').story

        story.on('StoryUpdate', (storyElement) => {
            $(this.output).append($('<div/>').wiki(storyElement))
            $(this.output).scrollTop($(this.output).prop('scrollHeight'))            
        })
        _.each(event.story, (storyElement) => {
            $(this.output).append($('<div/>').wiki(storyElement))
        })
    }
})