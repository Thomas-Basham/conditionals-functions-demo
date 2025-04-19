console.log("let's try the debugger");

let counter = 2;

for (let i = 0; i < 5; i++) {
  // console.log("iteration ", i + 1)
  counter = counter * 2;
}

// we want to create an array of
// super hero objects

// we will prompt the user using prompt()
// for a name, power, weakness
// create an object from the the user input
// add the object/s to the superHero array

let superHeroes = [];


for (let i = 0; i < 5; i++) {
  let newHero = {};

  let heroName = prompt("Give me a super hero name");
  newHero.heroName = heroName; // assign a heroName property to our object

  let superPower = prompt("What is their super power?");
  newHero.superPower = superPower;

  let weakness = prompt("what is their weakness?");
  newHero.weakness = weakness;

  superHeroes.push(newHero);
}

console.log(superHeroes)
