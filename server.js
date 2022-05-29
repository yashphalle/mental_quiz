const express=require('express');
const app=express();
const http = require('http'); 
const hostname = '127.0.0.1';
app.set('view engine','ejs');
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



app.get("/",(req,res)=>{
res.render("login")
})


app.post('/logincheck',(req,res)=>{
     u=req.body.username;
     p=req.body.password;

    if(u=='ashish'&& p=='ashish@123'){
      res.render("home")
    }
    else{
res.send(`TRY Again`)
    }
})


app.get('/test',(req,res)=>{
    res.render("test")
})

app.post('/check',(req,res)=>{
    const a=[];
    a.push(req.body.q1,req.body.q2,req.body.q3,req.body.q4,req.body.q5,req.body.q6,req.body.q7,req.body.q8,req.body.q9,req.body.q10);
    console.log(a);
var result=0;
    for (let index = 0; index < 10; index++) {
        const element = a[index];
        if(element==1){
            result=result+100;

        }
        else if(element==2){
            result=result+75;

        }
        else if(element==3){
            result=result+50;

        }
        else if(element==4){
            result=result+25;

        }
    }
    res.render('resultpage',{result})
})

const port=3000;app.listen(port, hostname, () => {
    console.log(`HTTP Server listening at http://${hostname}:${port}/`);
  });