//how to produce a promise

let myPromise = new Promise(function(resolve,reject){
    const a = 4;
    const b = 11;

    setTimeout(()=>{
        if(a === b){
            resolve('The values are equal');
        }else{
            reject('The values are not equal');
        }
    },2000)
});

//pending state
// console.log(myPromise)

//fulfilled - then method

//consuming your promise
myPromise.then(function(res){
   console.log(res) 
})  //fulfilled state

myPromise.catch(function(failedRes){
    console.log(failedRes);
})  //rejected state

//Your promise get settled