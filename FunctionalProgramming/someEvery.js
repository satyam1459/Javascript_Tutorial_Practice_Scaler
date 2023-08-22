//some method 
//Condition Check -> return true or false based on condition
//it will return true if even 1 element satisfies the condition

let transactions = [-1000,2000,-989,-2932,-22223];
let res = transactions.some(function(n){
    return n>0;
})
console.log(res);

//every-every element should satisfies the conditon
let transactions1 = [-1000,2000,-989,-2932,-22223];
let ans =transactions1.every((n)=>{
    return n<0;
})
console.log(ans);