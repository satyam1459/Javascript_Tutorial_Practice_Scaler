let user={
    name:"Satyam",
    age:24,
    gender:'M',
    address:{
        city:"Khalilabad",
        state:"Uttar Pradesh",
        country:"India"
    }
};

let{name:n,age:a,gender:g,address:{country:c}}=user;    //name should be same and we can provide another name for keys after :
console.log(user);
console.log(n);
console.log(a);
console.log(g);
console.log(c);
