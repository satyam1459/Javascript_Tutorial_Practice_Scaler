//loops are statements that we use to control a flow of program and do some repetative tast
var a ="Hello world";

//for loop 
for(let i = 0; i< 10;i++){
    console.log(a+" "+(i+1));
}

// you have an array and you have to square each element of that array

var num=[2,4,6,8];

var squaredArr=[];
for(let i = 0; i<num.length;i++){
    squaredArr.push(num[i]*num[i]);
}
console.log(squaredArr);