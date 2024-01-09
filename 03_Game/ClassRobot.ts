import { RobotInfo } from "./types";

export class Robot implements RobotInfo {
  robotName: string;
  life: number;
  attackDamage: number;
  shield: number;
  criticProbability: number;
  isAlive = true;

  constructor(
    robotName: string,
    life: number,
    attackDamage: number,
    shield: number,
    criticProbability: number
  ) {
    this.robotName = robotName;
    this.life = life;
    this.attackDamage = attackDamage;
    this.shield = shield;
    this.criticProbability = criticProbability;
  }

  get getLife() {
    return this.life;
  }

  get getShieldValue() {
    return this.shield;
  }

  set setLife(value: number) {
    if (this.life - value <= 0) {
      this.life = 0;
      this.isAlive = false;
    } else {
      this.life -= value;
    }
  }

  attackReceived(value: number) {
    this.setLife = value;
    console.log(`${this.robotName} life after attack: ${this.life}`);
  }

  attack(target: Robot) {
    if (!target.isAlive) {
      console.log("El obtetivo la palmó");
      return;
    }
    let isCriticalAttack: boolean;

    if (Math.random() * 100 < this.criticProbability) {
      isCriticalAttack = true;
    } else {
      isCriticalAttack = false;
    }

    const totalAttack: number = Math.floor(
      this.attackDamage +
        (isCriticalAttack ? this.attackDamage * Math.random() : 0)
    );

    console.log(`${this.robotName} total attack: ${totalAttack}`);

    target.attackReceived(totalAttack);
  }
}
