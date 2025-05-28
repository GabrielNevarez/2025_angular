var reviews = [5, 5, 4.5, 3, 2, 1];
for (var i = 0; i < reviews.length; i++) {
    console.log("Review " + (i + 1) + ": " + reviews[i]);
}
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    total += reviews[i];
}
var average = total / reviews.length;
console.log("Average review: " + average.toFixed(2));
var sports = ["Soccer", "Basketball", "Tennis", "Baseball"];
for (var i = 0; i < sports.length; i++) {
    console.log("Sport " + (i + 1) + ": " + sports[i]);
}
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var Sport = sports_1[_i];
    console.log("Sport: " + Sport);
}
for (var _a = 0, sports_2 = sports; _a < sports_2.length; _a++) {
    var Sport = sports_2[_a];
    if (Sport === "Tennis") {
        console.log("Found Tennis!");
    }
    else {
        console.log("Not Tennis: " + Sport);
    }
}
