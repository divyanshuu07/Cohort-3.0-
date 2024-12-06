//A Promise in JS is an object that represents the evnetual completion(or failure) of an asynchronous operation and its resulting value.
//Used to handle async operations more effectivelyt than Callback functions.


function main(){
    console.log("hello")
}

function print(){
    console.log("Byee")
}

setTimeout(main,3000);

setTimeout(print,1000);
console.log("hiee");

//A callback is basically a function passed as an arguement to another function and that another function decides when to call that function
//which is passed as an arguement.