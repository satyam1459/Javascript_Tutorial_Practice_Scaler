let myObj = {};

console.log(myObj);

let person1 = {
    name :"Satyam",
    age:23
};
console.log(person1.hasOwnProperty('gender'));

//constructor function

function Person(_name,_age){
    this.name = _name;
    this.age = _age;
    
}
let person2 = new Person("Sanjay",25);

console.log(person2);