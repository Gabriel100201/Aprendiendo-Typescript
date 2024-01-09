import { Robot } from "./ClassRobot";

const Chispas = new Robot("Chispas", 100, 20, 30, 30);
const Robocop = new Robot("Robocop", 100, 10, 50, 5);

Chispas.attack(Robocop);
Robocop.attack(Chispas);
