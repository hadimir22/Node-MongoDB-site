const express=require('express'); 
const mongoose = require('mongoose');
const userData = require('./model/model');
const bodyParser = require('body-parser')
 

mongoose.connect('mongodb://localhost/Node&me' , { useNewUrlParser: true } );
mongoose.connection.once('open', function(){
        console.log('connected using mongoose');
}).on('error', function(error){
    console.log('error', error);
});

const app=express(); 
app.use(express.static(__dirname + '/public/'));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
  
 



app.get('/',function(req,res)
{
    //res.sendFile(__dirname + '/index.html');
    res.render('index');

   
});

app.get('/join',function(req,res){
    //res.sendFile(__dirname + '/join.html');
    res.render('join');
});

app.post('/join',function(req,res){
    var user = new userData({
        name : req.body.name,
        projectName : req.body.proName,
        url : req.body.link
       });
    
       user.save(function(err){
            if (err){ 
                console.log(err);
            }
            else{
            console.log('data saved');
            res.redirect('/display');
            }
       });
   
});

app.get('/display',function(req,res){

    userData.find({} , function(err, data){
        
   res.render('display', {data : data});
        });
  
});




var server=app.listen(2000,function() {
    console.log("app running on port 2000");
});

