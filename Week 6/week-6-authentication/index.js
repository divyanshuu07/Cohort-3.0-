const express=require('express');
const jwt=require('jsonwebtoken');
const JWT_SECRET="yoyowassuup";
const app=express();

app.use(express.json());

const users=[];



app.post("/signup",function(req,res){
    const username =req.body.username;
    const password=req.body.password;

    if(users.find(u => u.username===username)){
        res.json({
            message: "You are already signedup."
        })
        return
    }
    users.push({
        username: username,
        password: password,
    })

    res.json({
        message: "you are signed in"
    })

    console.log(users);
})

app.post("/signin",function(req,res){
    const username =req.body.username;
    const password=req.body.password;

    let foundUser=null;
    for(let i=0;i<users.length;i++){
        if(users[i].username== username && users[i].password==password){
            foundUser=users[i];
            break;
        }
    }
    if(foundUser){
        const token=jwt.sign({
            username: username
        }, JWT_SECRET);
        
        // foundUser.token=token
        res.json({
            message: token
        })
    }else{
        res.status(403).send({
            message: "invalid username or password"
        })
    }
    console.log(users);

})

app.get("/me",function(req,res) {
    const token=req.headers.token //jwt
    const decodedInfo=jwt.verify(token,JWT_SECRET);
    const username=decodedInfo.username

    res.json({
        message: username
    })

    // let foundUser=null;
    // for(let i=0;i<users.length;i++){
    //     if(users[i].token==token){
    //         foundUser=users[i]
    //     }
    // }
    // if(foundUser){
    //     res.json({
    //         username: foundUser.username,
    //         password: foundUser.password,
    //     })
    // }else{
    //     res.json({
    //         message: "Invalid Token"
    //     })
    // }
})

app.listen(3000, ()=>{
    console.log("Listening to 3000...")
})
