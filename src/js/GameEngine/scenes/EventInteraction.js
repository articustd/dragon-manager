import { logger } from "@util/Logging";
import _ from "lodash";
import { Scene } from "phaser";

export class EventInteraction extends Scene {
    name
    interactions
    story

    constructor() {
        super("EventInteraction")
    }

    create(data) {
        this.name = data.eventName
        this.interactions = _.map(data.interactions, (interaction) => {
            return this.add.interaction(interaction)
        })
        this.story = this.add.story()
        logger(this)
    }

    update(t, dt) { }

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