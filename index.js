
/*
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("starksofnorth", salt);
console.log(hash);
var com = bcrypt.compareSync("starksofnormth", hash);
console.log(com);
*/

var express=require('express'); 
var app=express();
 

app.use(express.static(__dirname + '/public/'));

app.get('/',function(req,res)
{
    res.sendFile(__dirname + '/index.html');
});

app.get('/join',function(req,res)
{
    res.sendFile(__dirname + '/join.html');
});
var server=app.listen(2000,function() {
    console.log("running");
});