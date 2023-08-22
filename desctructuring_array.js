//The destructing assignment syntax is a Javascript expression that makes it possible to unpack values
//from arrays, or properties from objects into distinct variables

let arr=["Hi!","I","am",,"Satyam"];
// console.log(arr[1]);
// console.log(arr[2]);

let[a,b,c,d,e]=arr;
console.log(a);
console.log(e);

