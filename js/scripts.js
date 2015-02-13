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


// Slice of Pie part 2
console.log("PROBLEM 3: SLICE OF PIE PART 2");

var noPizzas = prompt("How many pizzas are being ordered?");
var noPeople = prompt("How many people will be eating?");


var noSlices = 12;
var slicesPp = noPizzas * noSlices / noPeople;




console.log("There are " + noSlices + " per pizza.");

console.log("Based on the number of people and pizzas with 12 slices. Each person can have " + slicesPp + " slices each.");


// Average Shopping Bill

console.log("PROBLEM 4: AVERAGE SHOPPING BILL");


var groceryTotals = [prompt("Enter Week 1 Grocery Amount"), prompt("Enter Week 2 Grocery Amount"), prompt("Enter Week 3 Grocery Amount"), prompt("Enter Week 4 Grocery Amount"), prompt("Enter Week 5 Grocery Amount")];

var totalGrocery = groceryTotals[0] + groceryTotals[1] + groceryTotals[2] + groceryTotals[3] + groceryTotals[4];

var averageSpending = (groceryTotals[0] + groceryTotals[1] + groceryTotals[2] + groceryTotals[3] + groceryTotals[4]) / 5;


console.log("You have spent a total of $" + totalGrocery + " on groceries over 5 weeks. That is an average of $" + averageSpending " per week");


// Discounts

console.log("PROBLEM 5: DISCOUNTS");

var origPrice = prompt("Enter the original price.");
var discPrice = prompt("Enter discount amount.");
var saleTax = prompt("Enter sales tax amount.");

var newPrice = origPrice * discPrice;
var newTax = newPrice * saleTax;
var newPriceTax = newPrice + newTax;



console
