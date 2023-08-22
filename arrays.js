//arrays provide you a ordered collection of data
var arr=[12,"Ferrari",true,0.234];
console.log(typeof arr);
console.log(arr[1]);
console.log(arr.slice(1,3));
console.log(typeof arr[2]);

//replacing element by index
arr[1]="Toyota";

console.log(arr);
console.log(arr.length);

//inbuilt js array method
var arr2=[12,44,55,9090.0];

//pop method-remove last element
arr2.pop();
console.log(arr2);

//add an element at end of array
arr2.push(111);

//add elemnt at beginning
arr2.unshift(10000);
console.log(arr2);

//remove element at beginning
arr2.shift();
console.log(arr2);
