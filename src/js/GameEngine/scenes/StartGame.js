import { GolemGameObject } from "@GameEngine/gameobjects/golem";
import { BaseResource } from "@GameEngine/gameobjects/resources/BaseResource";
import { logger } from "@util/Logging";
import { Scene } from "phaser";

export class StartGame extends Scene {
    autosaveTick
    golem
    resources
    buildings
    actions

    constructor() {
        super("StartGame")

        this.autosaveTick = 0
    }

    create() {
        this.golem = this.add.golem()
        this.resources = [
            this.add.resource('Mana', 100),
            this.add.resource('Basic'),
            this.add.resource('Complex')
        ]
        this.buildings = [
            this.add.building({name: 'Gathering Hub', cost: [{resource: 'Basic', amount: 11}]})
        ]
        this.actions = [
            this.add.action({name: 'Gather Basic', baseCooldown: 600, resource: 'Basic', amount: 10}),
            this.add.action({name: 'Sleep'})
        ]
    }

    update() {
        this.autosaveTick += 1
        if(this.autosaveTick >= 3600) {
            this.autosaveTick = 0
            Save.autosave.save()
        }
    }

    toJSON() {
        let resources = _.map(this.resources, (resource)=>{return resource.toJSON()})
        let buildings = _.map(this.buildings, (building)=>{return building.toJSON()})
        let actions = _.map(this.actions, (action)=>{return action.toJSON()})
        return { golem: this.golem.toJSON(), resources, buildings, actions }
    }

    loadData(data) {
        this.golem.loadData(data.golem)
        _.each(this.resources, (resource)=>{
            resource.loadData(_.find(data.resources, {name:resource.name}))
        })
        _.each(this.buildings, (building)=>{
            building.loadData(_.find(data.buildings, {name:building.name}))
        })
        _.each(this.actions, (action)=>{
            action.loadData(_.find(data.actions, {name:action.name}))
        })
    }

    getResource(name) {
        return _.find(this.resources, {name})
    }

    getBuilding(name) {
        return _.find(this.buildings, {name})
    }

    getAction(name) {
        return _.find(this.actions, {name})
    }
}