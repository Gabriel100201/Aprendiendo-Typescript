"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Robot = void 0;
var Robot = /** @class */ (function () {
    function Robot(robotName, life, attackDamage, shield, criticProbability) {
        this.isAlive = true;
        this.robotName = robotName;
        this.life = life;
        this.attackDamage = attackDamage;
        this.shield = shield;
        this.criticProbability = criticProbability;
    }
    Object.defineProperty(Robot.prototype, "getLife", {
        get: function () {
            return this.life;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Robot.prototype, "getShieldValue", {
        get: function () {
            return this.shield;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Robot.prototype, "setLife", {
        set: function (value) {
            if (this.life - value <= 0) {
                this.life = 0;
                this.isAlive = false;
            }
            else {
                this.life -= value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Robot.prototype.attackReceived = function (value) {
        this.setLife = value;
        console.log("".concat(this.robotName, " life after attack: ").concat(this.life));
    };
    Robot.prototype.attack = function (target) {
        if (!target.isAlive) {
            console.log("El obtetivo la palmó");
            return;
        }
        var isCriticalAttack;
        if (Math.random() * 100 < this.criticProbability) {
            isCriticalAttack = true;
        }
        else {
            isCriticalAttack = false;
        }
        var totalAttack = Math.floor(this.attackDamage +
            (isCriticalAttack ? this.attackDamage * Math.random() : 0));
        console.log("".concat(this.robotName, " total attack: ").concat(totalAttack));
        target.attackReceived(totalAttack);
    };
    return Robot;
}());
exports.Robot = Robot;
