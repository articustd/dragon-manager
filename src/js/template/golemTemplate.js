import { getScene } from "@GameEngine/Core";
import { logger } from "@util/Logging";

Template.add('golemAvailable', function() {
    return getScene('StartGame').golem.available
})

Template.add('golemPop', function() {
    return getScene('StartGame').golem.population
})

Template.add('tierOneResourceTotal', function() {
    return getScene('StartGame').tierOneResource.total
})

Template.add('tierOneWorkerTotal', function() {
    return getScene('StartGame').tierOneResource.workers
})