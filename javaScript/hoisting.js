b();
console.log(a);

var a = 'hello przemix'; //< it works only if we type var - we'll have undefined
//let + const works in standard way of execution if we set that syntax - JS will throw error

function b(){
    console.log(`called b!`);
}

/* 
functions and variables are hoisted in javascript - moved to the top, 
declaration goes with the code execution
*/

/*
EXECUTION CONTEXT:::
> Global object is set in memory 
> this object is set in memory
> setup memory space for variables and functions - it's called Hoisting
 before code is executed, javascript set the space for vars and functions, next code is executed
 line by line and access them in memory
 * all variables in JS are initialy set to undefined
*/