//classical inheritance
class Person{
    constructor(_name,_age){
        this.name = _name;
        this.age = _age;
    }
    welcome(){
        console.log(`Welcome ${this.name} ...!!`);
    }
}

class Teacher extends Person{
    constructor(_name,_age,_sub){
        super(_name,_age);
        this.sub = _sub;
    }
    test(){
        super.welcome();
    }
}

class Student extends Person{
    constructor(_name,_age,_class){
        super(_name,_age);
        this.class=_class;
    }
}

let Person1 = new Person("Adam",23);
console.log(Person1);
let Teacher1 = new Teacher("Lata",23,"Bio");
console.log(Teacher1);
console.log(Teacher1.name);
Teacher1.test();
let Student1 = new Student("Krishna",223,10);
console.log(Student1)
Student1.welcome();
