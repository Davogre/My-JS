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