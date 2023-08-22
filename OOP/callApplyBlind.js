let person1={
    firstName :"Steve",
    lastName:"Rogers",
    age: 24,
   
};
let printDetails=function(city, pincode){
    console.log(`Hi, I am ${this.firstName} ${this.lastName} and I am ${this.age} years old and I am from ${city}, ${pincode}`)
}
printDetails.call(person1,"Gorakhpur",112);

let person2={
    firstName :"Tony",
    lastName:"Stark",
    age: 43
};

//call method
//borrowing the function of person1 by person2
printDetails.call(person2,"New York",272175);

//apply 
printDetails.apply(person2,["New York",272175]);

//bind
let myFun=printDetails.bind(person2,"New York",272175);
console.log(myFun);
myFun();

//apply method
