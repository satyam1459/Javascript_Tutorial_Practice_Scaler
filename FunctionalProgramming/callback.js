// function printFirstName(firstName,cb){
//     console.log(firstName);
//     cb("From callback ->"+"Jaiswal");
// }
// printFirstName("Satyam",printLastName);

// function printLastName(lastName){
//     console.log(lastName);
// }
// printLastName("Jaiswal");

//Application of callback

//progrm to check even number
const isEven =(n)=>{
    return n % 2==0;
}

let printResult = (evenFn, num)=>{
    const isNumEven= evenFn(num);
    console.log(`The number ${num} is an Even  Number ${isNumEven} `);
}

printResult(isEven,15);