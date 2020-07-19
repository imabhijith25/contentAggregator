var express  = require('express');
var cors  = require('cors');
var app = express();
app.use(cors())
const fetch = require('node-fetch');

app.set('port',3000);
const obj = {

}




app.get('/main',(req,res)=>{
    const url="https://newsapi.org/v2/top-headlines?country=us&apiKey=3bf1b49ceafe413ea018bde6d180d37c"
    fetch(url).then(resp=>resp.json()).then(function(data){
            res.json(data)
    })


    })



app.get('/tech',(req,res)=>{
    const url="http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3bf1b49ceafe413ea018bde6d180d37c"
    fetch(url).then(resp=>resp.json()).then(function(data){
            res.json(data)
    })


    })

app.get('/sports',(req,res)=>{
    const url="http://newsapi.org/v2/everything?q=sports&apiKey=3bf1b49ceafe413ea018bde6d180d37c"
    fetch(url).then(resp=>resp.json()).then(function(data){
            res.json(data)
    })


    })


app.get('/movies',(req,res)=>{
    const url="http://newsapi.org/v2/everything?q=movies&apiKey=3bf1b49ceafe413ea018bde6d180d37c"
    fetch(url).then(resp=>resp.json()).then(function(data){
            res.json(data)
    })


    })
        
        



app.listen(3000,()=>{
    console.log('Node server created at port 3000');
   });