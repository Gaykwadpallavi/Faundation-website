const mongoose = require('mongoose')
const docsSchema=mongoose.Schema({
    email:{
        type:String,
    },
    pic:{
        type: String
    },
    adhaarpic: {
        type: String
    },
    fadhaarpic: {
        type: String
    },
    marksheet12: {
        type: String
    },
    passoutrecently: {
        type: String
    },
    samagraid: {
        type: String
    },
    incomecertificate: {
        type: String
    },
    
})
const Docs=new mongoose.model('Doc',docsSchema);
module.exports=Docs;