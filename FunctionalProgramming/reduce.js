//you need sum of every element in an array

//Imperative way
let num = [1,2,3,4,10];
// let sum = 0;     //accumulator

// for (let i = 0 ; i< num.length;i++){
//     sum+=num[i];
// }
// console.log(sum);

//declarative way

//reduce method -> returns a single element
//usually takes two parameter - one is accumulatore and another is value 
let res = num.reduce(function(acc, value ){
   let updatedSum = acc+value;
   return updatedSum;
},0);
console.log("From reduce method-> "+res);

let res1 = num.reduce(function(acc,val){
    let updatedPro = acc * val;
    return updatedPro;
},1);
console.log("Product from reduce method -> "+res1);