/**
 *
 * In general Functions used to return values  in normal-foo function example
 * Callback is where you pass a function as a parameters and invoke inside a function is called callback
 * @param {sum} ans
 */

//Normal function example:
function foo(a,b){
    sum =a+b;
    return sum;
}
console.log(foo(1,2))
//In this sum is returned 


/**
 * Callback function
 * Callbacks are a great way to handle something after something else has been completed. 
 * By something here we mean a function execution. 
 * If we want to execute a function right after the return of some other function, 
 * then callbacks can be used.
 * */
function callback_fun(ans){
    //callback will print the output
    console.log(ans);
}

function add(x,y,fun){
    //add receives 3 params x,y, and a callback function

    let sum = x+y;
    //after the sum is calculated callbacks function is called
    callback_fun(sum);
}

function sub(x,y,fun){
    let sub = x-y;
    callback_fun(sub);
}
//First a function is invoked in our case add
add(4,8,callback_fun);



function inject(some){
    let px =document.createElement('h1');
    px.innerText=some;
    document.body.append(px);
}

function myFirst(){
    inject("myFirst");
}
function mySecond(){
    inject("mySecond");
}

mySecond();
myFirst();