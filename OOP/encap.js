function Person(_name,_age){
    var name = _name;
    this.age = _age;

    this.getName= function(){
        return name;
    }
}

let Person1 = new Person("Adam",23);
// Person1.name = "Steve";
console.log(Person1.getName());