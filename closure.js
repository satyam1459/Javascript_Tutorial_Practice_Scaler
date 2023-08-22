// function test(){
//     let a = 2;

//     function test1(){
//         console.log(a);
//     }
//     return test1;
// }

// let fun = test();
// console.log(fun);
// fun()

function greet(){
    let name = "Satyam"

    function displayName(){
        console.log("Hi "+name);
        let age = 35;

            function displayAge(){
                console.log(age);
            }
        return displayAge;
    }
    return displayName;
}
let g1 = greet();
console.log(greet);
g1();               //displayName

let g2 = g1();
console.log(g2);
g2();