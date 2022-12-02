const Registration=require('../db/models/registerSchema')
const registrationController=async (req,res)=>{
   try {
     const date=new Date()
     const idx=Date.now()
     const status=new Status({
          id:idx,
          name: req.body.firstname+' '+req.body.lname,
          year:date.getFullYear(),
          exam:false,
          interview:false,
          housevisit:false,
          success:false
     })
    const registered=new Registration({
          firstname:req.body.firstname,
          lastname:req.body.lname,
          fathersname:req.body.fathername,
          dob: req.body.dob,
          gender: req.body.gender,
          maritialstatus: req.body.maritialstatus,
          annualincome: req.body.annualincome,
          email: req.body.email,
          contact: req.body.contact,
          alternatecontact: req.body.alternatecontact,
          qualification10: {
          board: req.body.board10,
          school: req.body.school10,
          pass: req.body.pass10,
            per: req.body.per10,
          },
          qualification12: {
            board: req.body.board12,
            school: req.body.school12,
            pass: req.body.pass12,
            per: req.body.per12,
          },
          qualificationUG: {
            board: req.body.universityUG,
            school: req.body.collegeUG,
            pass: req.body.passUG,
            per: req.body.perUG,
          },
          qualificationPG: {
            board: req.body.universityPG,
            school: req.body.collegePG,
            pass: req.body.passPG,
            per: req.body.perPG,
          },
          photo:req.files,
          localaddress: req.body.localaddress,
          localstate: req.body.localstate,
          localcity: req.body.localcity,
          permanentaddress: req.body.permanentaddress,
          permanentstate: req.body.permanentstate,
          permanentcity: req.body.permanentcity,
          q1:req.body.q1,
          q2:req.body.q2,
          q3:req.body.q3,
          q4:req.body.q4,
          q5:req.body.q5,

          
    })

    const userdata= await registered.save();
    await status.save();
        console.log('data inserted');

 if(userdata){
          sendVerifyMail(req.body.firstname,req.body.email,userdata._id);
          // res.render('docs',{email:req.body.email })
          res.render('docs',{message:"your registration success",email:req.body.email});   }
        } 
        catch (error) {
              console.log(error);  }
}

// email verification
      
var nodemailer=require('nodemailer');
const Status = require('../db/models/statusSchema');
const sendVerifyMail= async(name,email,user_id)=>{ 
  try {
     const Transporter= nodemailer.createTransport({
          host:'smtp.gmail.com',
          port:587,
          secure:false,
          requireTSL:true,
          auth:{
              user:'bnitesh179@gmail.com',
              pass:'gtqdsnxgfhehksrw'
          }
      });

const mailOption={
  from:'bnitesh179@gmail.com',
  to:email,
  subject:'for user verification :',
  html:`<h1> please click here to verify your mail...</h1> <a href="http://localhost:3000/verify?id=${user_id}">click me</a>`,
  text:'this is testing for infobeans foundation website mail testing....'
}

Transporter.sendMail(mailOption, function(error,info){
  if(error){
console.log(error);
  }

  else{
console.log("Email has been sent succesfully...",info.response);
  }
})



  } catch (error) {
      console.log(error.message);
  }
}

// -------------- verification  method--------------------------------------------

const verifymail=async(req,res)=>{
try {
const updateemail=await User.updateOne({_id:req.query.id},{$set:{is_varified:1}}) 
console.log(updateemail);
res.render("email verified");

} catch (error) {
  console.log(error.message);
}
}



module.exports = {
  registrationController,
  verifymail
}



// module.exports = registrationController;