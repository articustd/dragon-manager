import { getScene } from "@GameEngine/Core";
import { logger } from "@util/Logging";

Template.add('koboldAvailable', function() {
    return getScene('StartGame').kobold.available
})

Template.add('koboldPop', function() {
    return getScene('StartGame').kobold.population
})

