import { getScene } from "@GameEngine/Core";
import { logger } from "@util/Logging";

Template.add('golemPop', function() {
    return getScene('StartGame').golem.population
})