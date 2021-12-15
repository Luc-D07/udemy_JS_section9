'use strict';
// ----------------- STRING METHODS PRACTICE ----------------

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//start by dividing these strings apart
// then loop over the array
//destructure to take pieces from the array

const getCode = str => str.slice(0, 3).toUpperCase();

console.log(flights.split('+'));
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🛑' : ''}${type.replaceAll(
    '_',
    ' '
  )}, ${getCode(from)}, ${getCode(to)}, (${time.replace(':', 'h')})`.padStart(
    40
  );
  console.log(output);
}

// ---------STRINGS-----------

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737');

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

//can use slice method to extract part of a string, need index to do this
// these methods always return a new string

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization of a name
const passenger = 'jOnAs'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails

const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// This is a longer version of the simple answer below
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// Replace parts of strings

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));

// Booleans 'includes', 'starts with', 'ends with'

const planeN = 'A320neo';
console.log(planeN.includes('A320'));
console.log(planeN.includes('Boeing'));
console.log(planeN.startsWith('Air'));

if (planeN.startsWith('Airbus') && planeN.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};
checkBaggage('I have a laptop, some Food, and a pocket Knife.');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// PART 3 STRINGS

console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding a string-adding characters to a string until the string is a desired length

const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(43378464834647383));

// Repeat method

const message2 = 'Bad weather...All Departures Delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

// --------------- CODE CHALLENGE #4 ------------------

// Write a program that receives a list of variable names written in underscore_case and conver to camelCase
// The input will come from a textarea inserted into the DOM(see code below to insert the elements), and conversion will happen when the button is pressed

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  //split text into multple pieces
  const rows = text.split('\n');
  console.log(text);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    // console.log(row, first, second);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)} `);
  }
});

//find index of '_'
//slice index
//next character capitalize
// let underScore = '';

// const underScore = function (variableName) {
//   const underScoreIndex = variableName.indexOf('_');
//   const sliceUnderScore = underScoreIndex.slice();
//   const makeCamelCase = (underScore + 1).toUpperCase();
// };
// underScore('underscore_case');

// --------------------------  ---------------------------
// const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];
// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex, mainIndex, time, address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

//---------- CODING CHALLENGE #3 -------------

// 1. Create an array "events" of the different game events that happened (no duplicates)

// 2. After the game has finished, it was found that the yellow card from the 64 minute was unfair, remove this from the events log.

//3. Compute and log the following string to the console: "An event, happened, on average, every 9 minutes" (Keep in mind that a game has 90 minutes)

// 4. Loop over "gameEvents" and log each element to the console, marking whether it's in the first or second half (after 45 minutues) of the game, like this: [FIRST HALF] 17: Goal

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [(69, '🔴 Red card')],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, ' 🔶 Yellow card'],
// ]);

// 1
// const events = [...new Set(gameEvents.values())];

// 2
// gameEvents.delete(64);
// console.log(gameEvents);

// 3
// let currentTime = 0;
// for (let timeEvent of gameEvents) {
//   let time = (currentTime += timeEvent);
//   console.log(time);
//   let avgTime = time / gameEvents.length;
//   // console.log(avgTime);
//   // console.log(`An event happened, on average, every ${avgTime}`);
// }

// console.log(`An event happened, on average, every ${gameEvents.size / 90}`);

// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// 4

// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

// ---------------- MAPS: Iteration
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct!'],
//   [false, 'Try again'],
// ]);
// console.log(question);

// COnvery object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));

// console.log(...question);
// ---------- MAPS: Fundamentals ---------------------------

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// console.log(rest.get('name'));
// console.log(rest.get(true));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));

// rest.delete(2);

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

// ----------- SETS -------------

// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(orderSet);
// //duplicates are gone, printed once

// console.log(new Set('Jonas'));

// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// orderSet.delete('Risotto');
// console.log(orderSet);

// //cannot retrieve data from a set using index number

// for (const order of orderSet) console.log(order);

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// console.log(new Set('daniellelucaj').size);

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days`;

// for (const day of properties) {
//   openStr += `${day}`;
// }
// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// const entries = Object.entries(openingHours);
// console.log(entries);

// // destructuring the value to two values of Open and Close allows us to print both times while looping through the array. Less code is written
// for (const [key, { open, close }] of entries) {
//   console.log(`on ${key} we open at ${open} and close at ${close}`);
// }

// if (restaurant.openHours && restaurant.openingHours.open)
//   console.log(restaurant.openingHours.mon);

// //Optional Chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// // Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

// console.log(users[0]?.name ?? 'User array empty');

// ----------------- Looping Arrays: For Of Loop -------------

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);

// ------------- NUllish Coalescing Operator

// restaurant.numGuests = 0;

// const guests = restaurant.numGuests || 10;
// console.log(guests);
// //nullish: null or undefined (NOT 0 or " ");
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// ----------------------- Short-Circuiting (&& and ||) ------------------

//logical operators use any data type, return any data type, short-circuiting
//returns the first truthy statement and not continue
// console.log(3 || 'jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests
//   ? restaurant.numGuests
//   : (restaurant.numGuests = 10);
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('--------AND---------');
// //short-circuits when it comes to a falsy value and returns that

// console.log(0 && 'jonas');
// console.log(7 && 'jonas');

// console.log('Hello' && 23 && null && 'jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// // ---------------------------------- REST PATTERN and PARAMETERS ----------------

// // ** Destructuring
// //spread operator, because on right side of the operator
// const arr = [1, 2, ...[3, 4]];

// // rest(remaining) operator, because on te left side of operator
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// //OBJECTS
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // **Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'sausage', 'olives');
// restaurant.orderPizza('mushrooms');

// // SPREAD operator
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];

// //join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// //Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 'S'];
// console.log(letters);
// console.log(...str);

// const ingredients = [
//   prompt("Let/'s make pasta! Ingredient 1 ?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// // OLD WAY
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// // NEW WAY
// restaurant.orderPasta(...ingredients);

// //Objects
// const newRestaurant = { ...restaurant, foundedIn: 1991, founder: 'Guiseppe' };
// console.log(newRestaurant);

// ------------- DESTRUTURING OBJECTS --------------------------------

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables while destructuring objects
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested Objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// ----------------------  Destructuring(unpacking) an array  ------------------
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[2];
// const c = arr[3];

// const [x, y, z] = arr;

// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// Switching Variables
// const temp = main;
// main = secondary;
// secondary = temp;

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// Nested Destructuring

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default Values
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);

//----------------- Destructuring Objects --------------------

//--------------------CODING CHALLENGE----------------------------
// 1. Create one player array for each team; variables "players1" and "players2"
// 2. The first plater in any array is the goalkeeper and the others are fieldplayers. For Bayern Munich(team1) create one variable("gk") with the goalkeeper's name and one array("fieldplayers") with all the remaining 10 players
// 3. Create another array "allPlayers" containing all the players from both teams(22 players)
// 4. During the game, Bayern Munich(team 1) used 3 substitute players. Create a new array(players1Final) containing all the original team1 players plus "Thiago", "Coutinho", and "Perisic".
// 5. Based on the game.odds object, create one variable for each odd(called "team1", "draw", and "team2").
// 6. Write a function "printGoals" that receives an arbritrary number of plater names (not an array) and prints each of them to the console, along with the number of goals scored in total(number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or ternary operator.

//  TEST DATA for 6: first, use platers "Davies", "Muller", "Lewandowski", and "Kimmich". Then, call the function again with players for game.scored

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// // 1.
// const [players1, players2] = game.players;

// // 2.
// const [gk, ...fieldPlayers] = players1;

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4.
// let players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
// console.log(players1Final);

// // 5.
// const {
//   odds: { team1, x, team2 },
// } = game;
// // const team1 = game.odds.team1;
// // console.log(team1);
// // const draw = game.odds.x;
// // console.log(draw);
// // const team2 = game.odds.team2;
// // console.log(team2);

// // 6.
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored `);
// };
// printGoals(...game.scored);
// // printGoals("Davies", "Muller", "Lewandowski", "Kimmich")

// // 7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// -------------------- CODING CHALLENGE #2 -------------------
// Task 1.
// Loop over the game.scored array and print each player name to the console.
// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}: ${player}`);

// Task 2.
// Use a loop to calculate the average odd and log it to the console ( we already studied how to calculate averages, you can go check if you don't remember)

// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// Task 3.
// Print the 3 odds to the console, but in a formatted way like this: Odd of victory:
//** Get the team names directly from the game object, don't hardcode them (except for draw). Hint: Note how the odds and the game objects have the same property names*/

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

//Odd of victory Bayern Munich: 1.33
//Odd of draw: 3.25
//Odd of victory Borrussia Dortmund: 6.5

// Task 4.
//* Create an object called "scores" which contains the names of the players who scored as properties and the number of goals as the value. In this game it will look like this: { Garnby: 1, Hummels: 1, Lewandowski: 2}  *//
