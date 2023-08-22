
var a = 2;

//impure function
// function add(x){
//     console.log(x+a);
//     a++;
// }
// add(10);
// add(10);
// add(10);


//pure function
function addPure(x,a){
    return (x+a);  //we cannot use console.log as it's using external resource, but we can use out of function
}
addPure(2,5);
addPure(2,5);
addPure(2,5);
addPure(2,5);
