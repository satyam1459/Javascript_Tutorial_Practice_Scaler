class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    welcome(){
        console.log(`Welcome ${this.name} ...!!`);
    }
}

let Person1 = new Person("Adam",23);
let Person2 = new Person("Medi",23);
let Person3 = new Person("Lomu",23);
console.log(Person1);
console.log(Person2);
console.log(Person3);
console.log(Person1.name);
Person1.welcome();