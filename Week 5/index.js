const express=require("express");
const app =express();

function methodChecker(req,res,next){
    console.log("Method is "+ req.method);
    const timestamp=new Date().toISOString();
    console.log("Time is "+ timestamp);
    console.log("URL is "+ req.hostname);
    next();
}

function sumHandler(req,res){
    const a =parseInt(req.params.firstArg);
    const b =Number(req.params.secondArg);
    res.json({
        answer: a+b,
    })
}

app.get("/sum/:firstArg/:secondArg",methodChecker,sumHandler)

app.listen(3000);