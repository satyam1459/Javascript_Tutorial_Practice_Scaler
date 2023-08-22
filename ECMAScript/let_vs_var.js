"use strict"
var a =20;

var a=35;

// let b=30;

// let b=55;   //redeclaration problem

console.log(a);
// console.log(b);

if(a===34){
    let b =40;
    console.log(b);
}
// console.log(b);

//variables declared with let keyword are block scope
function test(){
    let c=100;
    console.log(c);
}
test();
console.log(c);

//const keyword->declare a constant variable