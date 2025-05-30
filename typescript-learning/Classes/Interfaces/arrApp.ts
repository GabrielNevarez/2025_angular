import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let coaches: Coach[] = [];
coaches.push(new CricketCoach());
coaches.push(new GolfCoach());
for (let coach of coaches) {
    console.log(coach.getDailyWorkout());
    console.log("===================================");
}