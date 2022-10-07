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

let myPost = {};
myPost = {
    postTitle: "Object is reference type",
    postLikes: 0,

};
myPost.shared = false;
console.log(myPost);

myPost.postLikes = myPost.postLikes + 1;
delete myPost.shared;

console.log(myPost);