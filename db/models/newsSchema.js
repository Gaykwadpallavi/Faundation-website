const mongoose = require('mongoose')

const newsSchema=mongoose.Schema({
    headline:{
        type:String,
        required: true
    },
    fullnews:{
        type:String,
        required: true
    }
})

const News=new mongoose.model('News',newsSchema);
module.exports=News;