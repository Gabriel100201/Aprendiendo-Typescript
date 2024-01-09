"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClassRobot_1 = require("./ClassRobot");
var Chispas = new ClassRobot_1.Robot("Chispas", 100, 20, 30, 30);
var Robocop = new ClassRobot_1.Robot("Robocop", 100, 10, 50, 5);
Chispas.attack(Robocop);
