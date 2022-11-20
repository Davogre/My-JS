// /**
//  * EXAMPLE 2
//  * 
//  * Regular for loop with arrays
//  * NEVER USE THIS KIND OF LOOPS WITH ARRAYS
//  */
// const myArray = [0, true, "abc", null];
// myArray.i = "New property i"

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray.i);
// }
// console.log(myArray);

// Random number Generation 1
// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

// console.log(getRandomArbitrary(1000, 9999));

// Random number Generation 2
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
// }

// console.log(getRandomInt(1000, 9999));

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
// }

// console.log(getRandomIntInclusive(1000, 9999));

// Example bada waala
// /**
//  * TASK 2
//  * 
//  * Generate new 4-digit random number.
//  * Range for the random number is 1000-9999.
//  * 
//  * Ensure that this new random number doesn't match any of the numbers in the myNumbers array.
//  * If it matches you need to generate new 4-digit number.
//  * If there is no match(new number is unique) then add it to the myNumbers array.
//  */
const MIN = 1000;
const MAX = 9999;

const myNumbers = [
  2355,
  7235,
  8135,
  1762,
  2361,
  8351
];

let newRandomNumber;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

do {
  newRandomNumber = getRandomInt(MIN, MAX);
} while (isNotUnique(newRandomNumber));

function isNotUnique(newRandomNum) {
  // compare num with numbers in the myNumbers array
  for (let number of myNumbers) {
    if (number === newRandomNum) {
      console.log("Number " + newRandomNum + " is not unique!");
      return true;
    }
  }
}

myNumbers.push(newRandomNumber);

console.log(myNumbers);