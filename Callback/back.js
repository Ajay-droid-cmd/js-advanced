/*
 * Callback is where you pass a functon as a perameter and invoke inside a function is called callback
 */
function callback_fun(ans){
    console.log(ans);
}

function add(x,y,fun){
    let sum = x+y;
    callback_fun(sum);
}

function sub(x,y,fun){
    let sub = x-y;
    callback_fun(sub);
}

add(4,8,callback_fun);
