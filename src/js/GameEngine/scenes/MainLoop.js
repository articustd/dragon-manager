import { KoboldGameObject } from "@GameEngine/gameobjects/kobold";
import { BaseResource } from "@GameEngine/gameobjects/resources/BaseResource";
import { logger } from "@util/Logging";
import { Scene } from "phaser";

export class MainLoop extends Scene {
    autosaveTick
    kobold
    dragon
    resources
    buildings
    actions

    constructor() {
        super("MainLoop")

        this.autosaveTick = 0
    }

    create() {
        this.dragon = this.add.character('Dragon', 'dragon', {_health: 10, attack: 1, attackSpeed: 60})
        this.kobold = this.add.kobold()
        this.resources = [
            this.add.resource('Mana', 200),
            this.add.resource('Stamina', 100),
            this.add.resource('Gold'),
            this.add.resource('Complex'),
            this.add.resource('Advanced')
        ]
        this.buildings = [
            this.add.building({ name: 'Gathering Hut', cost: [{ resource: 'Gold', amount: 10 }] }),
            this.add.building({ name: 'Workshop', cost: [{ resource: 'Gold', amount: 250 }, { resource: 'Complex', amount: 10 }] }),
            this.add.building({ name: 'Factory', cost: [{ resource: 'Gold', amount: 500 }, { resource: 'Complex', amount: 250 }, { resource: 'Advanced', amount: 10 }] })
        ]
        this.actions = [
            this.add.action({ name: 'Gather Gold', baseCooldown: 600, resource: 'Gold', amount: 2 }),
            this.add.action({ name: 'Gather Complex', baseCooldown: 1200, resource: 'Complex', amount: 2 }),
            this.add.action({ name: 'Gather Advanced', baseCooldown: 2400, resource: 'Advanced', amount: 2 }),
            this.add.action({ name: 'Sleep' })
        ]

        logger(this.dragon)
    }

    update(t, dt) { // FIXME When off tab, updates are not calced, use previous time state to figure out what the new delta is and compensate
        this.autosaveTick += 1
        if (this.autosaveTick >= 300) {
            this.autosaveTick = 0
            Save.autosave.save()
        }
    }

    toJSON() {
        let resources = _.map(this.resources, (resource) => { return resource.toJSON() })
        let buildings = _.map(this.buildings, (building) => { return building.toJSON() })
        let actions = _.map(this.actions, (action) => { return action.toJSON() })
        return { dragon: this.dragon.toJSON(), kobold: this.kobold.toJSON(), resources, buildings, actions }
    }

    loadData(data) {
        logger({data})
        this.dragon.loadData(data.dragon)
        this.kobold.loadData(data.kobold)
        _.each(this.resources, (resource) => {
            resource.loadData(_.find(data.resources, { name: resource.name }))
        })
        _.each(this.buildings, (building) => {
            building.loadData(_.find(data.buildings, { name: building.name }))
        })
        _.each(this.actions, (action) => {
            action.loadData(_.find(data.actions, { name: action.name }))
        })
    }

    getResource(name) { return _.find(this.resources, { name }) }

    getBuilding(name) { return _.find(this.buildings, { name }) }

    getAction(name) { return _.find(this.actions, { name }) }

    getCharacter(name) { return (name === 'dragon') ? this.dragon : this.enemy }
}