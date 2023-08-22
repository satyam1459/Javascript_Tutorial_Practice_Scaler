//Basic function in JS
function greet(){
    console.log("Welcome");
}
greet();    //function invokation

//Parameters and arguments

function add(a,b){
    return a+b;
}

console.log(add(5,5));  
add(4,6)

//function as expression

var add= function(a,b){     //anonymous function
    console.log(a+b);
}
var sum =add;
sum(10,44);
add(5,5);

//Hoisting

