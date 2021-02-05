const mongoose = require('mongoose');
const {Schema}=mongoose;

const stormtrooper = new Schema({
    name:{
        type:String,
        required:true
    },
    nickname:{
        type:String,
        required:true
    },
    divisions:[String],
    patent:{
        type:String,
        required:true
    }
},{
    timestamp:true
});

module.exports=mongoose.model('Stormtrooper',stormtrooper);