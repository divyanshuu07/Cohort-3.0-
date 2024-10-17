const fs=require("fs");

const contents=fs.readFile("a.txt","utf8"); //asynchronously(the program is on hold)
console.log(contents);
const contents2=fs.readFileSync("b.txt","utf-8"); //synchronously
console.log(contents2);