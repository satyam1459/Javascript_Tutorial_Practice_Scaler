//Higher order functions receives other function as an argument or return output as another function

// let arr=[1,2,3,4,5];

// let squaredArr = [];

// for(let i = 0; i < arr.length;i++){
//     squaredArr.push(arr[i]*arr[i]);
// }
// console.log(squaredArr);

// map- Map will loop through every element of your array and will perform specific operations that you have provided
//Map method will always return you a new array with your results

const num = [4];
const squaredArr = num.map(function(n){
    return n*n;
});

console.log(squaredArr);

const transactions = [1000,3000,4000,2000,-898,3800,-400];

const intoDollar = 80;
let transactionsInDollar = transactions.map(function(n){
    return (Number)(n/80).toFixed(0);
})
console.log(transactionsInDollar);