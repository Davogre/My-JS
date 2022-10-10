// /**
//  * EXAMPLE 1
//  * 
//  * Try to "declare" function expression
//  */
// // It is not possible to use function expression standalone
// function() { } //Uncaught SyntaxError: Unexpected token (

// /**
//  * EXAMPLE 2
//  * 
//  * Assign function expression to the variable
//  */
// const myFunction = function() { };

// console.log(myFunction()); // undefined

// console.log(myFunction); // ƒ () { }

// /**
//  * EXAMPLE 3
//  * 
//  * Callback function
//  */
// setTimeout(function() {
//   console.log("Delayed message");
// }, 3000);

// Most Common use case of "  Anonymous Function Expression"
// Function call using " Anonymous Function Expression" as ARGUMENT.

// Yaha pe dekh sakte hai ki "setTimeout" jo hai ek METHOD hai Global 
// Object WINDOW ki.
// WINDOW(global object hai) ki Method ko direct call kar sakte hai.

// At least 1 argument istemaal kar sakto ho aap isme.
// setTimeout() : iska game ye hai ki
// pehla argument(jo function hai(jo Anonymous Function Expression hai))
// usko call karta hai , jitne sec 1000ms, 2000ms jo bhi likho ge usme, 
// utne time me call karta hai.
// Call ander ka function automatically after 3 secs


// /**
//  * EXAMPLE 4
//  * 
//  * Callback function (example 2)
//  */
let i = 1;
setInterval(function () {
    console.log("Message logged each 1 second " + i + " waala");
    i = i + 1;
}, 1000);

//iski kahani aesi hai ki
//har sec baad pehla argument chalayega, jo ki function call hai