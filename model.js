const mongoose = require('mongoose');
const Schema = mongoose.Schema;

////////////////////////schema/////////////////////////
const infoSchema = new Schema( {
    name : String,
    projectName : String,
    url : Number,
});

///////////////////////model///////////////////////////////
const infoModel =  mongoose.model('infoModel', infoSchema );

module.exports = infoModel;

