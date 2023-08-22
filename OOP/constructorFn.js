 function createCar(_name,_company,_color){
    this.name = _name;
    this.company=_company;
    this.color=_color;

    this.drive=function(){
        console.log(`I am driving ${this.name} and it is of ${this.color} color`);
    }
 }
 let car1= new createCar("X4","BMW","Red");
 let car2 = new createCar("S1","Mahindra","Black");
 console.log(car2);
 console.log(car1);
 car2.drive();
 car1.drive();
 console.log(car1.color);

 