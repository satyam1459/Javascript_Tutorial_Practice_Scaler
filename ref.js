let first = "Satyam";

let second = first;

first = "Jaiswal";

console.log("First -> "+ first);
console.log("Second ->"+second);

let third = {
    name:"Satyam",
    age:25
};

let fourth = third;
third.name = "Ram";
console.log(third); 
console.log(fourth); 