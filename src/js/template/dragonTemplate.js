import { getScene } from "@GameEngine/Core";
import { logger } from "@util/Logging";

Template.add('dragonName', function() {
    return getScene('MainLoop').dragon.name
})
