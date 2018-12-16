const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/node&me');


mongoose.connection.once('open', function(){
        console.log('connected using mongoose');

}).on('error', function(error){
    console.log('error', error);
});