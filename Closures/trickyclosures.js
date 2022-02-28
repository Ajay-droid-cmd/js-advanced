
// Using var will make it as a global variable 
// so the value will mutate to 3 3 3
//var is stored in the stack memory so it gets earased after its done 
for (var i = 0; i <3;i++){
    const log = () =>{
        console.log(i);
    }
    setTimeout(log,100);
}

// if we use let the value is storred in a heap memory 
//cause the let is block env 

for(let i = 0; i <3;i++) {
    const vlog = () =>{
        console.log(i);
    }
    setTimeout(vlog,100);
}