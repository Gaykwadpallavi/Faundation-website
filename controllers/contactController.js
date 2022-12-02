const Contact = require("../db/models/contactSchema")

const contactController=async (req,res)=>{
   try {
    const contact=new Contact({
        name:req.body.name,
        email:req.body.email,
        subject:req.body.subject,
        message:req.body.message
    })
    await contact.save()
    console.log('data inserted');
    res.redirect(301,'/')
   } catch (error) {
    console.log(error);
   }
}

module.exports=contactController;