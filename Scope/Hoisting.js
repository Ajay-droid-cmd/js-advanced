/*
 * In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. 
 * Basically, it gives us an advantage that no matter where functions and variables are declared, 
 * they are moved to the top of their scope regardless of whether their scope is global or local. 
*/



//Normal scope
let name='happy';
console.log(name);

/*
console.log(x) // ReferenceError: x is not defined
x=5 //Now x becomes a global variable
*/

function hoist() {
/*  
 *In javascript, undeclared variables do not exist until code assigning them is executed. 
 *Therefore, assigning a value to an undeclared variable implicitly creates it as a global variable
 */   
    a=10;
 let b=50;
}

/*
 *There’s a difference between ReferenceError and undefined error. 
 *An undefined error occurs when we have a variable that is either not defined or explicitly defined as type undefined.
 *ReferenceError is thrown when trying to access a previously undeclared variable.
*/
hoist();
console.log(a);
console.log(b);