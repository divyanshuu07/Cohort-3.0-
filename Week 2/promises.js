// //Promises fix callback hell.

// function setTimeoutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve,ms));
// }
// function callback(){
//     console.log("3 seconds have passed");
// }
// setTimeoutPromisified(3000).then(callback);


function random(resolve){   //resolve is also a function
    setTimeout(resolve,3000);
}

let p=new Promise(random); // supposed to return u something eventually.


//using the eventual value returned by the promise.
function callback(){
    console.log("promise suceeded");
}

p.then(callback);


