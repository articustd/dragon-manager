import { getScene } from "@GameEngine/Core";
import { logger } from "@util/Logging";
import _ from "lodash";

export function loadGameData(GameData) {
    _.each(GameData, (data, scene)=>{
        getScene(scene).loadData(data)
    })
}