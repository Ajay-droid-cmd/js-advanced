/*
*    In JavaScript, a closure is a function that references variables in the outer scope from its inner scope.
*    The closure preserves the outer scope inside its inner scope.
*    To understand the closures, you need to know how the lexical scoping works first.
*/


//Lexical scoping
// let name = 'Jhon';
// function get(){
//     let mess = 'Hi';
//     console.log(mess+ name);
// }

// get();

// function greet(){
//     let mess = 'Hi';
//     function hi(){
//         console.log(mess);
//     }
//     hi();
// }
// greet();

// function get(){
//     let message = 'hi';
//     function hi(){
//         console.log(message);
//     }
//     return hi;

// }
// let hi = get();
// hi();

//A closure is a function that preserves the outer scope in its inner scope.

function greet(message){
    return function(name){
      return  console.log(message +' '+name);
    }
}
let sayhi = greet('HI');
console.log(sayhi('Ajay'));   