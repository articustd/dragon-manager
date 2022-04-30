import { logger } from "@util/Logging";
import { GameObjects } from "phaser";

export class BaseResource extends GameObjects.GameObject {
    _total
    spawnAmount
    spawnRate
    _tick
    _workers

    constructor(scene, resource) {
        super(scene, 'Resource')

        this.name = resource
        this._total = 0
        this.spawnAmount = 1
        this.spawnRate = 60
        this._tick = 0
        this._workers = 0
    }

    preUpdate() {
        this.tick += this.workers
        if (this.tick >= this.spawnRate) {
            this.tick -= this.spawnRate
            this.total += this.spawnAmount
        }
    }

    get total() { return this._total }
    set total(total) { this._total = total; this.emit(`${this.name}TotalChange`, total); }

    get tick() { return this._tick; }
    set tick(tick) { this._tick = tick; this.emit(`${this.name}Tick`, { tick: this.tick, spawnRate: this.spawnRate }); }

    get workers() { return this._workers }
    set workers(workers) { this._workers = workers; this.emit(`${this.name}WorkerChange`, workers); }

    toJSON(data) {
        let json = super.toJSON()
        return { ...json, ...data, active: this.active, total: this.total, spawnAmount: this.spawnAmount, spawnRate: this.spawnRate, tick: this.tick, workers: this.workers }
    }

    loadData(data) {
        if (data) {
            this.active = data.active
            this.total = data.total
            this.spawnAmount = data.spawnAmount
            this.spawnRate = data.spawnRate
            this.tick = data.tick
            this.workers = data.workers
        }
    }
}