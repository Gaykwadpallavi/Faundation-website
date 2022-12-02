const mongoose = require("mongoose");

const registerSchema = mongoose.Schema({
  firstname: {
    type: String,
    // required: true,
  },
  lastname: {
    type: String,
    // required: true,
  },
  fathersname: {
    type: String,
    // required: true,
  },
  dob: {
    type: Date,
    // required: true,
  },
  gender: {
    type: String,
    // required: true,
  },
  maritialstatus: {
    type: String,
    // required: true,
  },
  annualincome: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
    unique: true,
  },
  contact: {
    type: Number,
    // required: true,
    unique: true,
  },
  alternatecontact: {
    type: Number,
    // required: true,
    unique: true,
  },
  qualification10: {
    board: {
      type: String,
      // required: true,
    },
    school: {
      type: String,
      // required: true,
    },
    pass: {
      type: String,
      // required: true,
    },
    per: {
      type: Number,
      // required: true,
    },
  },
  qualification12: {
    board: {
      type: String,
      // required: true,
    },
    school: {
      type: String,
      // required: true,
    },
    pass: {
      type: String,
      // required: true,
    },
    per: {
      type: Number,
      // required: true,
    },
  },
  qualificationUG: {
    university: {
      type: String,
      // required: true,
    },
    college: {
      type: String,
      // required: true,
    },
    pass: {
      type: String,
      // required: true,
    },
    per: {
      type: Number,
      // required: true,
    },
  },
  qualificationPG: {
    university: {
      type: String,
      // required: true,
    },
    college: {
      type: String,
      // required: true,
    },
    pass: {
      type: String,
      // required: true,
    },
    per: {
      type: Number,
      // required: true,
    },
  },
  photo:{
    type:String,
   },
  // adhaarpic:{
  //   type:String,
  // },
  // fadhaarpic:{
  //   type:String,
  // },
  // marksheet12:{
  //   type:String,
  // },
  // marksheetrecently:{
  //   type:String,
  // },
  // samagraid:{
  //   type:String,
  // },
  // incomepic:{
  //   type:String,
  // },
  localaddress: {
    type: String,
    // required: true,
  },
  localstate: {
    type: String,
    // required: true,
  },
  localcity: {
    type: String,
    // required: true,
  },
  permanentaddress: {
    type: String,
    // required: true,
  },
  permanentstate: {
    type: String,
    // required: true,
  },
  permanentcity: {
    type: String,
    // required: true,
  },
  q1:{
    type:String,
    // required:true
  }
  ,
  q2:{
    type:String,
    // required:true
  }
  ,
  q3:{
    type:String,
    // required:true
  }
  ,
q4:{
    type:String,
    // required:true
  }
  ,
  q5:{
    type:String,
    // required:true
  },
  is_varified:{
    type:Number,
    default:0
}


});
const Registration=new mongoose.model('Registered',registerSchema)
module.exports=Registration;