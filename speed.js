// Define variables
let speed = 80; 
const Limit = 70; 
const km = 5; 
let Points = 0; 

// Check if speed exceeds the speed limit
if (speed > Limit) {
    // Loop 
    for (let i = Limit + km; i <= speed; i + km) {
        Points++; // Increment points
    }
}

// Check if speed is within or equal to the speed limit
if (speed <= Limit) {
    console.log("Ok"); // Log "Ok" if speed is within the limit
} else {
    console.log(`Points: ${Points}`); // Log accumulated points
    
    // Check if accumulated points exceed the threshold for license suspension
    if (Points > 12) {
        console.log("License suspended"); // Log "License suspended" if points exceed the threshold
    }
}

