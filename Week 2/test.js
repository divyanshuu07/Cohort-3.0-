//Difference between Asynchronous and Synchronous

// const fs=require("fs");
// const contents=fs.readFile("a.txt","utf8"); //asynchronously(the program is on hold)
// console.log(contents);
// const contents2=fs.readFileSync("b.txt","utf-8"); //synchronously
// console.log(contents2);


//Functional arguments

function sum(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}
function subtract(a,b){
    return a-b;
}

function doOperation(a,b,op){
    return op(a,b);
}

console.log(doOperation(2,3,subtract));