//Defining classes using class keywords class declaration
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    //Getter
    get area(){
        return this.calcArea();
    }
    //Method
    calcArea(){
        return this.width * this.height;
    }
}
const square = new Rectangle(10,10);
console.log(square.area)


//Alternative way of defining classes using class expressions
let Rect = class{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
};
//console.log(Rect.name);

