var express=require('express');
var app=express();
var mongoose=require('mongoose');
var url ='mongodb://127.0.0.1:27017/todo';
var cors=require('cors');
var bodyParser=require('body-parser');
var port= 5500;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(url,function(err){
    if(err){
        console.log(err);
        console.log('error')
    }
    else{
        console.log('Database connected');
    }
});

const router=require('./Route/Route');
app.use('/',router);


app.listen(port,()=>{
    console.log(`Server listening in port ${port}`)
})