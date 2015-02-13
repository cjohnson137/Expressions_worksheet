/**
 * Charles Johnson
 * Expressions Worksheet
 * SDI Section 1
 * February 12, 2015
 */

// Dog Years

var sparkyAge = prompt("Please tell us Sparky's age.");

var dogYears = sparkyAge * 7;

console.log("PROBLEM 1: DOG YEARS");
console.log("Sparky is " + sparkyAge + " human years old which is " + dogYears + " in dog years");


// Slice of Pie part 1
console.log("PROBLEM 2: SLICE OF PIE PART 1");

var noPizzas = prompt("How many pizzas are being ordered?");
var noPeople = prompt("How many people will be eating?");


var noSlices = 12;
var slicesPp = noPizzas * noSlices / noPeople;




console.log("There are " + noSlices + " per pizza.");

console.log("Based on the number of people and pizzas with 12 slices. Each person can have " + slicesPp + " slices each.");