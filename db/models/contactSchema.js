const mongoose = require('mongoose')
const contactSchema=mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    subject:{
        type:String
    },
    message:{
        type:String
    }
})
const Contact=new mongoose.model('Contact',contactSchema)
module.exports=Contact;