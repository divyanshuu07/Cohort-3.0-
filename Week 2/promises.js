// //Promises fix callback hell.

// function setTimeoutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve,ms));
// }
// function callback(){
//     console.log("3 seconds have passed");
// }
// setTimeoutPromisified(3000).then(callback);

function print(){
    console.log("helloo");
}

function afterDone(){
    console.log("print is alr done");
}

print().then(afterDone);
