const mongoose = require('mongoose');
const Schema = mongoose.Schema;

////////////////////////schema/////////////////////////
const infoSchema = new Schema( {
    name : {
          type: String,
          required: true
        },
    projectName : {
        type: String,
        required: true
      },
    url :{
        type: Number,
        required: true
      },
});

///////////////////////model///////////////////////////////
const infoModel =  mongoose.model('infoModel', infoSchema );

module.exports = infoModel;

