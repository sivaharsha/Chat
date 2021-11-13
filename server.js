const express = require('express');
const   chats = require('./data/data'); 
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server listening at port ${PORT}`)
})

//console.log(process.env)

app.get("/",(req,res)=>{
    console.log(3)
    res.send('hai')
})

app.get('/logIn',(req,res)=>{
res.send('logInpage')
})

app.get('/register',(req,res)=>{
 res.json({msg:'RegisterPage'})
})

app.get('/home',(req,res)=>{
res.send('<h1>Hai</h1>')
})

app.get('/chat',function(req,res){
    console.log(res)
 res.send(chats)
})

app.get('/chat/:id',(req,res)=>{
//const singlechat = chats.find(c=>c._id === req.params.id)
const singlechat =chats.find((c)=>{
    return c._id ===  req.params.id;
});

res.send(singlechat)
})