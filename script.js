console.log("hello, world!");

// 2. Movie Budget
// You have $40. A movie ticket costs $9.50.
// How many full tickets can you buy, and what's the leftover amount?

// operators we know: +, -, *, /, **, %

let budget = 40;
let price = 9.5;
let ticketsBought = Math.floor(budget / price);
let leftoverAmount = budget % price;

console.log("Tickets bought: ", ticketsBought);
console.log("Leftover amount: ", leftoverAmount);

// boolean statements / conditional logic
// boolean means true or false
let isHungry = false;
let isThirsty = false;
// if the user is hungry, tell them to eat
// if the user is not hungry, tell them to go for a walk

if (isHungry) {
  console.log("well eat then!!");
} else if (isThirsty) {
  console.log("Take a drink!");
} else {
  console.log("Maybe you should go on a walk!");
}

// the code compiler/browser runs through
// the conditional statement, until it reaches a true value
// and then stops
if (false) {
  console.log("This is the if part ");
} else if (true) {
  console.log("this is the else if part");
} else {
  console.log("this is the else part");
}


// logical operators
// how we can create boolean statements

// === means is equal to
let five = (3 + 2) === 5;
console.log(five);

let someWord = "potato" === "Potato" // capital letters matter
console.log(someWord)
