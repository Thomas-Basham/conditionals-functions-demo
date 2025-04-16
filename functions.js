console.log("hello world");
// global scoped variable
let animal = "mouse";

// writing a function to get the area of a square
// takes a number and returns a number as the squared value

// function definition
function square(num) {
  let squared = num ** 2;
  console.log("squared", squared);

  return squared;
}

// function call
square(2);
// can also call functions and store the return value in a variable
let fourSquared = square(4);
// square(2)
// square(4)
// square(6)
// square(8)

// square("sandwich") // NaN datatype
// square()

// a function called yell, that takes a string parameter,
// and returns a capitalized version of that string.
function yell(text) {
  let yelling = text.toUpperCase() + "!!!!";
  console.log(yelling);

  return yelling;
}

yell("get your lab assignments done, please");

// scope

// global scope
// variables declared in the global scope,
// you can access anywhere in your code

// block scope
// variables declared in block scope, (a code block),
// can only be accessed inside of that code block
console.log(yelling) // reference error: yelling is not defined