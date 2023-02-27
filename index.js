const express = require('express');
const formate = require('date-format');
const app = express();

const PORT = 8000 || process.env.PORT

app.get("/", (req,res)=>{
    res.status(200).send("<h1>Hello from aslam Server</h1>")
})

app.get("/api/v1/instagram", (req, res)=>{
    const instaSocial = {
        username:"aslam0746",
        followers: 1000,
        follows: 100,
        date: formate.asString("dd:MM:yyyy hh:mm:ss",new Date())
    }
    res.status(200).json(instaSocial);
})

app.get("/api/v1/linkedin", (req, res)=>{
    const linkedinSocial = {
        username:"aslam0746",
        followers: 1000,
        follows: 100,
        date: Date.now()
    }
    res.status(200).json(linkedinSocial);
})

app.get("/api/v1/facebook", (req, res)=>{
    const facebookSocial = {
        username:"aslam0746",
        followers: 1000,
        follows: 100,
        date: Date.now()
    }
    res.status(200).json(facebookSocial);
})

app.get("/api/v1/:token",(req,res)=>{
    console.log(req.params.token);
    res.status(200).json({params:req.params.token});
})

app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`)
})