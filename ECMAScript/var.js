var a=20;

var a=34;    //redeclaration of a variable
// console.log(a);

if(a===34){
    var b =40;
    console.log(b);
}
//variable declare with var keyword are not block scope they are function scope
console.log(b);

function test(){
    var c=100;
    console.log(c);
}
test();
console.log(c);