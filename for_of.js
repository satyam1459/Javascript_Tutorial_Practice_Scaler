//for iterables

let array =["1","2","2","4"];
for(let i of array){
    console.log(i);
}


//getting index of array element

for(var[index,color] of array.entries()){
    console.log(index+'->'+color);
}

//Strings
var str="Satyam";

//getting each character separately
for(var c of str){
    console.log(c);
}
