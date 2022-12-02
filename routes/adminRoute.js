const express=require("express");
const router=express.Router();
const Gallery=require('../db/models/gallerySchema')
const adminController = require("../controllers/adminController");
const newsController = require("../controllers/newsController");
const placementController = require("../controllers/placementController");
const multer  = require('multer');
const Registration = require("../db/models/registerSchema");
const displayController = require("../controllers/displayController");
const Placement = require("../db/models/placementSchema");
const path= require('path')
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))
    }
})
const upload = multer({ storage:storage })

router.post("/upload",upload.single('image'),(request,response)=>{
    try {
        console.log("image url",request.file.filename)
        const gal=new Gallery({
            
            image:request.file.filename,
            description:request.body.decs,
            cat:request.body.cat
        })

        gal.save().then(()=>{
            console.log('datainserted...')
            request.flash('success','Image uploaded...')
            // response.send('uploads image successfully')
            response.redirect('./admin_route')
        })
        .catch((err)=>{
            request.flash('failure','Sorry An error occured...')

            console.log(err);
        })
    } catch (error) {
        request.flash('failure','Sorry An error occured...')

        console.log(error);
    }
});

router.post("/place",upload.single('pic'),(req,res)=>{
    try {
        // console.log("image url",request.file.filename)
        console.log(req.body);
        const placement = new Placement({
            image: req.file.filename,
            name: req.body.name,
            position: req.body.position,
            desc: req.body.desc,
          });
        


          placement.save().then(()=>{
            console.log('datainserted...')
            req.flash('success','placement updated...')
            // response.send('uploads image successfully')
            res.redirect('./admin_route')
            
        })
        .catch((err)=>{
            req.flash('failure','Sorry An error occured...')
            res.redirect('./admin_route')

            console.log(err);
        })
    } catch (error) {
        req.flash('failure','Sorry An error occured...')

        console.log(error);
    }
});

router.post('/newsupdate',newsController)
// router.post('/place',placementController)
router.get('/admin_route',async (req,res)=>{
    const data=await Registration.find().sort({_id:-1})
    res.render('admin_main',{
        obj:data,
        success:req.flash('success'),
        failure:req.flash('failure'),
    })
})
router.get('/admin_route/display',(req,res)=>{
    res.render('display',{
        details:'',
        images:""
    })
})

router.post('/log',adminController)
router.post('/admin_route/display',displayController)
module.exports=router;