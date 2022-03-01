/*
*Javascript Has 3 types of scope
*Block scope
*Function scope
*Global scope
*let and const are Block scope
*/

{
    let b=20;
}
//console.log(b); //Error: cannot be used outside the block as its a block variable Throws reference error

{
    var x=78;
}
console.log(x) // 78 cause var is global

function foo() {
    //Local Variable
    //Function scope
    var dp = '509'
    let car = 'Audi'
    console.log(car,dp);
}
//console.log(dp); //ReferenceError: dp is not defined var inside a function scope cannot be used outside


let name='Valvo';
function foo1() {
    //Global Variable
    console.log(name)
}
foo1(); //