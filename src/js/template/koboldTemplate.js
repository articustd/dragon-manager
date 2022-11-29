import { getScene } from "@GameEngine/Core";
import { logger } from "@util/Logging";

Template.add('koboldAvailable', function() {
    return getScene('MainLoop').kobold.available
})

Template.add('koboldPop', function() {
    return getScene('MainLoop').kobold.population
})

