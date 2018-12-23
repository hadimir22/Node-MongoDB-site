const mongoose = require('mongoose'); 
const userData = require('./model/model');


mongoose.connect('mongodb://localhost/Node&me' , { useNewUrlParser: true } );
mongoose.connection.once('open', function(){
        
}).on('error', function(error){
    console.log('error', error);
});

userData.find({} , function(err, data){
    console.log(data);
    });