const Docs=require('../db/models/docsSchema')
const multer  = require('multer');
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
})
const upload = multer({ storage:storage }).any('pics')
const docsContoller=async (req,res)=>{
    upload(req, res, function(err){
        if(err){
          console.log(err);
          return;
        }
        const docs=new Docs({
            email:req.body.email,
            pic:req.files[0].filename,
            adhaarpic: req.files[1].filename,
            fadhaarpic: req.files[2].filename,
            marksheet12: req.files[3].filename,
            passoutrecently: req.files[4].filename,
            samagraid: req.files[5].filename,
            incomecertificate: req.files[6].filename,
        })

        docs.save().then(()=>{
            console.log('data inserted');
        }).catch((erro)=>{
            console.log(error);
        })
        res.redirect(301,'/');
        console.log('Yep yep!');
      });

}
module.exports=docsContoller