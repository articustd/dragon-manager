import { getScene } from "@GameEngine/Core";
import { logger } from "@util/Logging";
import _ from "lodash";
import { Scene } from "phaser";

export class Fight extends Scene {
    dragon
    dragonAttackTick

    enemy
    enemyAttackTick

    constructor() {
        super("Fight")
    }

    create(dragon, enemy) {
        this.dragon = dragon
        this.enemy = enemy

        this.dragonAttackTick = 0
        this.enemyAttackTick = 0

        this.fighting = true
    }

    update(t, dt) {
        if (this.fighting) {
            this.dragonAttackTick += 1
            this.enemyAttackTick += 1

            if (this.dragonAttackTick >= this.dragon.attackSpeed) {
                //Damage Enemy
                this.dragonAttackTick = 0
            }

            if (this.enemyAttackTick >= this.enemy.attackSpeed) {
                //Damage Dragon
                this.enemyAttackTick = 0
            }

            // Check Health
            // Set Fighting to False if someone died
        }
    }
}