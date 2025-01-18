// //creating a http server
// //express
// //it is not a node default library

// const express=require("express");

// const app=express();

// function sum(n){
//     return (n*(n+1))/2;
// }

// app.get("/",function(req,res){
//     const n=Number(req.query.n);
//     if(isNaN(n)){
//         res.send("sahi input de vro");
//         return;
//     }
//     const ans=sum(n);
//     res.send("Output of first n numbers is: "+ans);
// })

// app.listen(3000);

const express=require("express");
const app =express();

app.get("/sum/:firstArg/:secondArg",function(req,res){
    const a =parseInt(req.params.firstArg);
    const b =Number(req.params.secondArg);

    res.json({
        answer: a+b
    })
})

app.get("/multiply",function(req,res){
    const a =Number(req.query.a);
    const b =Number(req.query.b);

    res.json({
        answer: a*b
    })
})

app.listen(3000);