let speed = 80;
const Limit = 70;
const km = 5;
let Points = 0;

if (speed > Limit) {
    for (let i = Limit + km; i <= speed; i += km) {Points++;}
}

if (speed <= Limit) {
    console.log("Ok");
} else {
    console.log(`Points: ${Points}`);
    
    if (Points > 12) {
        console.log("License suspended");
    }
}
