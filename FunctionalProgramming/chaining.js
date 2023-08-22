let arr=[
    {name:"A",age:12,gender:"M"},
    {name:"B",age:32,gender:"M"},
    {name:"C",age:42,gender:"M"},
    {name:"D",age:70,gender:"F"},
    {name:"E",age:42,gender:"F"},
    {name:"F",age:38,gender:"F"},
    {name:"G",age:32,gender:"M"},
    {name:"H",age:22,gender:"F"}   
];
//age of all the men(Males)
let males = arr.filter(function(obj){
    return obj.gender=="M" && obj.age > 20;
}).map(function(male){
    return male.age;
})
console.log(males);

// let ageOfMales = males.map(function(male){
//     return male.age;
// })
// console.log(ageOfMales);
let transaction=[1000,-898,2000,-765,2000];
let sum = transaction.filter(function(trans){
    return trans > 0
}).reduce(function(acc,value){
    let updatedSum = acc+value;
    return updatedSum;
},0);
console.log(sum);