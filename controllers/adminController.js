
const Admin = require('../db/models/adminSchema');
const adminController=async (req,res)=>{
    try {
       
        const data=await Admin.find();
        if(data[0].email===req.body.email&&data[0].password===req.body.pass)
            res.redirect('./admin_route');
        else
            res.send('wrong credentials');
    } catch (error) {
        console.log(error);
    }
}

module.exports=adminController;
