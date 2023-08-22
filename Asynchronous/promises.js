//promises ke andar callback hota usme ya to resolve hoga ya reject
const promise1 = new Promise(function(resolve,reject){
    //do an async task

    //Db calls, cryptography, network call
    setTimeout(function(){
        console.log('Async task is completed..!!');
        resolve();      //then k saath connect krega
    },1000);
});

//consume b krna hoga promise-> .then ka sidha relation hai resolve k saath then k andar ek callback milta jo automatically ek argument receive krta hai jo b kam hua hai uska value return krta hai
promise1.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 done");
        resolve();
    },2000);
}).then(function(){
    console.log("async 2 resolved");
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Satyam" , 
                email:"abc@gmail.com"})
    },1000);
})

promise3.then(function(user){
    console.log(user);
})


const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Jaiswal",email:"ab@email.com"})
        }else{
            reject("Error: Something went wrong");
        }
    },2000)
})

promise4
.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>
    console.log("The promise is either resolved or rejected"));


const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Javascript",email:"ab@email.com"})
        }else{
            reject("Error: JS went wrong");
        }
    },1000)
});

async function consumePromise5(){
   try{
    const response = await promise5;
    console.log(response);
   }catch(error){
    console.log(error);
   }
}
consumePromise5()


// async function getAllUsers(){
//     try{
//         const response = await fetch('https://       jsonplaceholder.typicode.com/users');
//         console.log(response);
//         const data = await response.json();
//         console.log(data);
//     }catch(error){
//         console.log("E"+error);
//     }
// }
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data)=>{console.log(data)})
.catch((error)=>console.log(error));