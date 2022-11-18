/**
 * EXAMPLE 2
 * 
 * Regular for loop with arrays
 * NEVER USE THIS KIND OF LOOPS WITH ARRAYS
 */
const myArray = [0, true, "abc", null];
myArray.i = "New property i"

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray.i);
}
console.log(myArray);