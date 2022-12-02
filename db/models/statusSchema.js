const mongoose = require('mongoose')
const statusSchema=mongoose.Schema({
    id:{
        type:String
    },
    Name:{
        type:String
    },
    year:{
        type:String
    },
    exam:{
        type:Boolean
    },
    interview:{
        type:Boolean
    },
    housevisit:{
        type:Boolean
    },
    success:{
        type:Boolean
    },

})
const Status=new mongoose.model('Status',statusSchema)
module.exports=Status;