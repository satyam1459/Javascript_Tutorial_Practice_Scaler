// console.log(this);   //window object

// function displaythis(){
//         console.log(this);
//     }
// displaythis();       //window object

// let myObj = {
//     name:"Satyam",
//     age:23,

//     myFn:function(){
//         console.log(this);
//     }
// }
// myObj.myFn()     //object itself


let myObj2 = {
    name:"Satyam",
    age:23,

    myFn2:function(){
        function myFn3(){
            console.log(this);
        }
        myFn3();
    }
}
myObj2.myFn2();