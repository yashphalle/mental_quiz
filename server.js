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
    for (let index = 0; index < 10; index++) {
        var q=res.body."q.+${index}";
        const element = array[index];
        
    }
})

const port=3000;app.listen(port, hostname, () => {
    console.log(`HTTP Server listening at http://${hostname}:${port}/`);
  });