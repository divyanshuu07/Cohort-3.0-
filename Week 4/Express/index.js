//creating a http server
//express
//it is not a node default library

const express=require("express");

const app=express();

function sum(n){
    return (n*(n+1))/2;
}

app.get("/",function(req,res){
    const n=Number(req.query.n);
    if(isNaN(n)){
        res.send("sahi input de vro");
        return;
    }
    const ans=sum(n);
    res.send("Output of first n numbers is: "+ans);
})

app.listen(3000);