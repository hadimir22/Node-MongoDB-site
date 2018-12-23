const mongoose = require('mongoose');

////////////////////////schema/////////////////////////
const Schema = mongoose.Schema;

const userSchema = new Schema( {
    name : {
          type: String,
          required: true
        },
    projectName : {
        type: String,
        required: true
      },
    url :{
        type: String,
        required: true
      },
});

///////////////////////model///////////////////////////////
const userData = module.exports =  mongoose.model('userData', userSchema );
 
///////////////////////////////////////////////////////////

 