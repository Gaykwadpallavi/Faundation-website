const Gallery=require('../db/models/gallerySchema');
const path=require('path');

const uploadpath=path.join(__dirname,'../uploads')
const galleryController=async (req,res)=>{
    try {
        const data=await Gallery.find().sort({_id:-1});
        if(data==null){
            res.render('gallery',{
                active1:"",
                active2:'',
                active4:"active",
                active5:"",
                active6:"",
                active7:"",
                active8:"",
                category:"",
                obj:""
    
        })
        }
        else{
        res.render('gallery',{
            active1:"",
        active2:'',
        active4:"active",
        active5:"",
        active6:"",
        active7:"",
        active8:"",
            obj:data,

    })
}

   
    } catch (error) {
        console.log(error);
    }
}
module.exports=galleryController;