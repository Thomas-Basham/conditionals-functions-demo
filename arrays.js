console.log("arrays hello world");

// JavaScript has 8 Datatypes
// String
// Number
// Bigint
// Boolean
// Undefined
// Null
// Symbol
// Object

console.log(typeof 3); // Number
console.log(typeof "hello"); // String
console.log(typeof true); // Boolean
console.log(typeof []); // Object (array, is an object)
console.log(typeof "20"); // String

let grade = 100;

if (grade === 100) {
  console.log("You got an A");
} else if (typeof grade != "number") {
  console.log("hey, you need to enter a number");
}

// JavaScript follows a distinct syntax pattern
// if () {}
// else if() {}
// function(){}
// for(){}
// while(){}

// ARRAYS
// if you catch yourself doing this,
// you probably need an array
let car1 = "saab";
let car2 = "volvo";
let car3 = "bmw";

// array literal
let cars = ["saab", "volvo", "bmw"];

// we can find the amount of items in an array
// with the .length property
console.log(cars.length);

// we can find the value of a particular index
// with arrayName[<index>]
console.log(cars[1]); // 'volvo'
console.log(cars[3]); // undefined

// we can find the last value of an array with .length
console.log(cars[cars.length - 1]); // bmw

// try to keep same datatypes in array
let mixedArray = [99, "mountain", true];

let grades = [99, 33, 40, 50, 10];
console.log(grades);

// nested array
// array matrix
// 2d array
let nested = [
  [99, 33, 40, 50, 10],
  [99, 33, 40, 50, 10],
  [99, 33, 40, 50, 10],
  [99, 33, 40, 50, 10],
  [99, 33, 40, 50, 10],
];
console.log(nested);

let dogs = ["labrador", "chihuahua", "dalmatian"];
dogs.push("pug");
console.log(dogs);
