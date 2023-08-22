class Animal{

    sound(){
        console.log("Animals make different sounds");
    }
    
}
class Dog{

    sound(){
        console.log("Dog barks");
    }

}
class Cat{

    sound(){
        console.log("Cat muses");
    }

}

let animal1 = new Animal();
animal1.sound();
let tommy = new Dog();
let persy = new Cat();
tommy.sound();
persy.sound();