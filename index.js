// /**
//  * CHALLENGE 1
//  *
//  * Create variable called "myPost".
//  * Initial value should be {}
//  * Add property called "postTitle" and value "Object is reference type"
//  * Add one more property "postLikes" with value 0
//  * Add third property "shared" and set its value to "false"
//  * Increase value of the "postLikes" by 1
//  * Delete property "shared"
//  */

// let myPost = {};
// myPost = {
//     postTitle: "Object is reference type",
//     postLikes: 0,

// };
// myPost.shared = false;
// console.log(myPost);

// myPost.postLikes = myPost.postLikes + 1;
// delete myPost.shared;

// console.log(myPost);

// /**
//  * CHALLENGE 2
//  * 
//  * Create variable "myObject" and add property "a" - 10.
//  * Create another variable "copyOfMyObject" and its value should be myObject.
//  * Add new property "b" with value false to the "copyOfMyObject".
//  * Print to the console "myObject" and "copyOfMyObject" and interpret results.
//  */

let mynObject = {};

mynObject.a = 10;

let copyOfmynObject = mynObject;
copyOfmynObject.b = false;

console.log(mynObject);
console.log(copyOfmynObject);