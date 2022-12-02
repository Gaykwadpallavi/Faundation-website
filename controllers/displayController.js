const Docs = require("../db/models/docsSchema")
const Registration = require("../db/models/registerSchema")

const displayController=async (req,res)=>{
    try {
        const details=await Registration.find()
        const images=await Docs.find()
        res.render('display',{details,images})
    } catch (error) {
        req.flash('failure','Oops!. something went wrong')
    }
}

module.exports=displayController;