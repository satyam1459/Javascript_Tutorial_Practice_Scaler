function Person(_name,_age){
    this.name = _name;
    this.age = _age;
}

Person.prototype.getNameAndAge = function(){
    console.log(`I am ${this.name} and my age is ${this.age}`)
}

let person1 = new Person("Satyam",23);
let person2 = new Person("Ram",22);
console.log(person1);
console.log(person2);
console.log(person2.getNameAndAge())