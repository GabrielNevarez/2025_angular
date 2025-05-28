let reviews: number[] = [5,5, 4.5, 3, 2, 1];
for (let i = 0; i < reviews.length; i++) {
    console.log("Review " + (i + 1) + ": " + reviews[i]);
}
let total: number = 0;
for (let i = 0; i < reviews.length; i++) {
    total += reviews[i];
}
let average: number = total / reviews.length;
console.log("Average review: " + average.toFixed(2));

let sports: string[] = ["Soccer", "Basketball", "Tennis", "Baseball"];
for (let i = 0; i < sports.length; i++) {
    console.log("Sport " + (i + 1) + ": " + sports[i]);
}

for(let Sport of sports) {
    console.log("Sport: " + Sport);
}

for(let Sport of sports){
    if(Sport === "Tennis") {
        console.log("Found Tennis!");
    }
    else {
        console.log("Not Tennis: " + Sport);
    }
}