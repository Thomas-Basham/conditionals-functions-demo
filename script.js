// console.log("hello, world!");

// // 2. Movie Budget
// // You have $40. A movie ticket costs $9.50.
// // How many full tickets can you buy, and what's the leftover amount?

// // operators we know: +, -, *, /, **, %

// let budget = 40;
// let price = 9.5;
// let ticketsBought = Math.floor(budget / price);
// let leftoverAmount = budget % price;

// console.log("Tickets bought: ", ticketsBought);
// console.log("Leftover amount: ", leftoverAmount);

// // boolean statements / conditional logic
// // boolean means true or false
// let isHungry = false;
// let isThirsty = false;
// // if the user is hungry, tell them to eat
// // if the user is not hungry, tell them to go for a walk

// if (isHungry) {
//   console.log("well eat then!!");
// } else if (isThirsty) {
//   console.log("Take a drink!");
// } else {
//   console.log("Maybe you should go on a walk!");
// }

// // the code compiler/browser runs through
// // the conditional statement, until it reaches a true value
// // and then stops
// if (false) {
//   console.log("This is the if part ");
// } else if (true) {
//   console.log("this is the else if part");
// } else {
//   console.log("this is the else part");
// }

// // logical operators
// // how we can create boolean statements

// // === means is equal to
// let five = (3 + 2) === 5;
// console.log(five);

// let someWord = "potato" === "Potato" // capital letters matter
// console.log(someWord)

// 4. Combine and Print
// Create variables for your name, favorite food, and a hobby.
// Print a sentence using all 3.

let fullName = "Michael Jordan";
let favoriteFood = "pasta";
let hobby = "Golf";

// string concatenation
let sentence =
  "Hi, my name is " +
  fullName +
  " my favorite food is " +
  favoriteFood +
  " and my favorite hobby is " +
  hobby +
  ".";

// console.log(sentence);

// template literals
// string templates
// string interpolation: using ${  }
let templateSentence = `Hi, my name is ${fullName} my favorite food is ${favoriteFood} and my favorite hobby is ${hobby}.`;
// console.log(templateSentence);

let isEqual = 2 + 2 === 4;
// console.log(isEqual)

let isGreaterThan = 10 <= 10000;
// console.log(isGreaterThan)

// && operator evaluates two statements,
// if they are both truthy, then the statement
// evaluates to true
// console.log(   1 > 5 && 10 < 100     ) // false
// console.log(   1 < 5 && 10 < 100     ) // true

// || operator also evaluates two statements,
// if one of them are truthy, then the statement
// evaluates to true
// console.log(   1 < 5 || 10 < 100     ) // true
// console.log(   1 > 5 || 10 < 100     ) // true
// console.log(   1 > 5 || 10 > 100     ) // false

// syntax for defining a function
// parameters go inside () in function definition
function greetUser(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}. Thanks for visiting`;
}

// calling/invoking our function
// arguments go inside () in function invocation
// greetUser("Thomas", "Basham")
console.log(  greetUser("Thomas", "Basham")  );

// write a function that takes two parameters
// to get the perimeter of a square
function getPerimeter(width, height) {
  let perimeter = width * 2 + height * 2;
  return perimeter
}

console.log( getPerimeter(2, 2) )
console.log( getPerimeter(10, 10) )
console.log( getPerimeter(10000, 1023423423) )
