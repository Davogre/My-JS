/**
 * JS-BASICS/CORE/CHALLENGE 01: SOLUTION - Function Expressions
 *
 * Use following built-in functions:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * You should print to the console ONLY 5 messages with interval 2 seconds:
 * "Here is message number 1"
 * "Here is message number 2"
 * "Here is message number 3"
 * "Here is message number 4"
 * "Here is message number 5"
 */

//Using setTimeout()

// setTimeout(() => { console.log("Here is message number 1") }, 2000);
// setTimeout(() => { console.log("Here is message number 2") }, 4000);
// setTimeout(() => { console.log("Here is message number 3") }, 6000);
// setTimeout(() => { console.log("Here is message number 4") }, 8000);
// setTimeout(() => { console.log("Here is message number 5") }, 10000);

// Output:

// Here is message number 1
// Here is message number 2
// Here is message number 3
// Here is message number 4
// Here is message number 5



// let i = 1;
// const myInterval = setInterval(() => {
//     console.log("Here is message number " + i);
//     i = i + 1;
// }, 2000);


// setTimeout(() => {
//     clearInterval(myInterval);
// }, 10000);


// 5. PRACTICE - Scopes - PART 1
// console.log("Hello");
// console.log("----------------");

// var a = 10;
// let b = true;
// const c = 25;

// function myFunction(a) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log("--------------");
// }

// function myFunction1(b) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log("----------------");
// }

// function myFunction2(c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// myFunction();
// myFunction1();
// myFunction2();

// Example - 2 Function Scope

function myFunction(a,b){
    const c = true;
    console.log(c);
    // console.log(d);
}

myFunction();


// Ye comment mene 08 Waali file me likha hai.