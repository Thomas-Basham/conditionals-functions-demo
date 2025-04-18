console.log("loops and objects");

let games = [
  "Clue",
  "Uno",
  "Call of Duty",
  "Mario",
  "world of warcraft ",
  "trouble",
  "Dragon Quest",
  "tetris",
  "Portal Knights",
];
// console.log(games); // gets us the whole array

// can access a value in an array with bracket notation
games[0]; // "clue"

// easier to write/read
// less customizable
for (let game of games) {
  // console.log(game)
}

// iterate forward through the array with a for loop
for (let i = 0; i < games.length; i++) {
  // console.log(games[i]);
}

// iterate in reverse
for (let i = games.length - 1; i > 0; i--) {
  // console.log(games[i]);
}

games.reverse(); // reverse the array in place
// console.log(games);

let clue = {
  gameName: "Clue",
  videoGame: false,
  "board game": true,
  players: 5,
  difficulty: "easy",
};

console.log(clue); // can access entire object by referencing it;s name

// can get a single property value by using
// dot notation or bracket notation

console.log(clue.difficulty); // dot notation
console.log(clue["players"]); // bracket notation

// when to use bracket notation
// when there's a space in the property name
// when the property name starts with a number
console.log(clue["board game"]);
