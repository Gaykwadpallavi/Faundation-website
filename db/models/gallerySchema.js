const mongoose = require('mongoose');

const gallerySchema=mongoose.Schema({
    image:{
        type: String
    },
    cat:{
        type:String
    }
})

const Gallery=new mongoose.model('Gallery',gallerySchema);
module.exports=Gallery;