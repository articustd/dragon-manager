import { getScene } from "@GameEngine/Core";
import { logger } from "@util/Logging";
import _ from "lodash";
import { Scene } from "phaser";

export class EventInteraction extends Scene {
    name
    interactions
    story
    leadsTo
    golems

    constructor() {
        super("EventInteraction")
    }

    create(data) {
        this.name = data.eventName
        this.golems = data.golems
        this.interactions = _.map(data.interactions, (interaction) => {
            return this.add.interaction(interaction)
        })
        this.story = this.add.story(data.startingDesc)
        logger(this)
    }

    update(t, dt) { }

    consumeGolems(amt = this.golems) {
        getScene('StartGame').golem.spend(amt)
    }

    toJSON() {
        let interactions = _.map(this.interactions, (interaction) => { return interaction.toJSON() })
        return {
            name: this.name,
            interactions
        }
    }

    loadData(data) {
        this.name = data.name
        _.each(this.interactions, (interaction) => { interaction.loadData(_.find(data.interactions, { name: interaction.name })) })
    }

    getActiveInteractions() { return _.filter(this.interactions, { active: true }) }

    getInteraction(name) { return _.find(this.interactions, { name }) }
}