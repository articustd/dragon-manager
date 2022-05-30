import { addEvent, getScene } from "@GameEngine/Core";
import { logger } from "@util/Logging";
import _ from "lodash";

export function loadGameData(GameData) {
    _.each(GameData, (data, scene)=>{
        if(!getScene(scene))
            addEvent(true, {})
        getScene(scene).loadData(data)
    })
}