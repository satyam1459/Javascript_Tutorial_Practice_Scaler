"use strict"
let a = 10;
console.log(this);

function displaythis(){
    console.log(this)
}
displaythis();

let myObj = {
        name:"Satyam",
        age:23,
    
        myFn:function(){
            console.log(this.name);
        }
    }
myObj.myFn();

let myObj2 = {
    name:"Satyam",
    age:23,

    myFn2:function(){
        function myFn3(){
            console.log(this);
        }
        myFn3();
    }
}
myObj2.myFn2();