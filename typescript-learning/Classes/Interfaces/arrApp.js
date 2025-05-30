"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var GolfCoach_1 = require("./GolfCoach");
var coaches = [];
coaches.push(new CricketCoach_1.CricketCoach());
coaches.push(new GolfCoach_1.GolfCoach());
for (var _i = 0, coaches_1 = coaches; _i < coaches_1.length; _i++) {
    var coach = coaches_1[_i];
    console.log(coach.getDailyWorkout());
    console.log("===================================");
}
