//spread operator {...}

let first = {
    name:"Satyam",
    age:23,

    address:{
        city:'Lucknow',
        state:"UP"
    }
};

let second = JSON.parse(JSON.stringify(first));

first.name="Ram";
first.address.city='Delhi';
console.log(first);
console.log(second);