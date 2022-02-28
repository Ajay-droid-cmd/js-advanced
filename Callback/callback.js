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