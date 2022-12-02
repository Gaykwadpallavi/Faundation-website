const mongoose=require('mongoose')

const placementSchema=mongoose.Schema({
    image:{
        type:String
    },
    name:{
        type:String
    },
    position:{
        type:String
    },
    desc:{
        type:String
    }
})
const Placement=new mongoose.model('Placement',placementSchema)
module.exports=Placement