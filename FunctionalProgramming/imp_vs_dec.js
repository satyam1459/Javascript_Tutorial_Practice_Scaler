// Imperative vs Declarative
//we will give a number and we have to check wehter it's square is even or add

const a = 5;
const sq = a*a;
let isEven = sq%2==0?true:false;
    console.log(isEven);
    
//declarative way of writing code
const checkForSquare=(x)=>(x*x%2===0 ? true:false);
console.log(checkForSquare(5));