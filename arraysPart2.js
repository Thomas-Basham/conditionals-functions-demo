console.log("time for arrays!");

let movies = ["Lion King", "Grease", "Sonic", "V for Vendetta"];

// log the whole array
console.log(movies);

// log the length of the array
console.log(movies.length);

// log the first value of the array
console.log(movies[0]);

// log the last value of an array
console.log(movies[movies.length - 1]);

// we can add a value to the end of an array with .push
movies.push("Moana");

// we can remove the first item in the array with .shift
movies.shift();

// we can remove the last item in the array with .pop
movies.pop();

console.log(movies);

let musicians = [
  "prince",
  "beyonce",
  "jcole",
  "michael jackson",
  "garbage",
  "violent femmes",
  "gorillaz",
];

// code smell asking for a for loop
// console.log(musicians[0]);
// console.log(musicians[1]);
// console.log(musicians[2]);
// console.log(musicians[3]);
// console.log(musicians[4]);
// console.log(musicians[5]);
// console.log(musicians[6]);

// can fix this with a for loop
// iterating through an array
for (let musician of musicians) {
  console.log(musician + " is great!");
}

// we can do a known or unknown amount of tasks with
// a standard for loop
for (let i = 0; i < 10; i++) {
  console.log("I is now: " + i);
}

// doesn't run
for (let i = 0; false; i++) {}

// infinitely loop
// for (let i = 0; true; i++) {}
