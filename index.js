// /**
//  * CHALLENGE 1
//  * 
//  * Create function called "mult" and it will have 3 parameters.
//  * Create new variable and assign to it result of multiplication of all 3 parameters.
//  * Print to the console result.
//  * Don't use "return".
//  */

function mult(a, b, c) {
    const d = a * b * c;
    console.log(d);
}

mult(2, 3, 4); //24

mult(2, 3, 5); //30

mult(2, 3, "abc"); // NaN  You will get this value if you try to multiply anything with string

mult();  // NaN  Undefined * Undefined * Undefined  = NaN

console.log(mult(2, 3, 5)); // 30 and Undefine Kyu ki return nahi hhai isliye. 30 is printed inside of the function and function returns "undefined"