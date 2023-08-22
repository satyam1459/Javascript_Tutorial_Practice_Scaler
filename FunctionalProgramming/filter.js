//check for even numbers;

let num = [9,45,64,22,12];

let evenAr =[];
for(let i = 0;i <num.length;i++){
    if(num[i]%2==0){
        evenAr.push(num[i]);
    }
}
console.log(evenAr);

// filter -> return a new array it will return all those elements that matches a specific condition
//if the condition is true it will return the element for that condition and if it is false it will discard that

let num1 = [9,45,64,22,12];
let evenNum = num1.filter((n)=>{
    return n%2===0;
})
console.log(evenNum);