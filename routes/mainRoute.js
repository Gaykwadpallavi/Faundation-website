const express=require('express');
const router=express.Router();
const galleryController = require('../controllers/galleryController');
const registrationController = require('../controllers/registrationController');
const docsController = require('../controllers/docsController');
const News = require('../db/models/newsSchema');
const contactController = require('../controllers/contactController');
const Placement = require('../db/models/placementSchema');


router.get('/',async (req,res)=>{
    try{
        const news=await News.find().sort({_id:-1}).limit(3)
    const obj={
        header:'header-transparent',
        active1:'active',
    }
    res.render('index',{
        news:news
    })
}
catch(error){
    console.log(error);
}
})

router.get('/gallery',galleryController)

router.get('/contact',(req,res)=>{
    const obj={
        active1:"",
        active2:'',
        active4:"",
        active5:"",
        active6:"active",
        active7:"",
        active8:"",
    }
    res.render('contact',obj)
})

router.get('/placements',async (req,res)=>{
    const data=await Placement.find().sort({_id:-1})
    const obj1={
        active1:"",
        active2:'',
        active4:"",
        active5:"active",
        active6:"",
        active7:"",
        active8:"",
        obj:data,
    }
    res.render('team',obj1)
})
router.get('/about',(req,res)=>{
    const obj={
        active1:"",
        active2:'active',
        active4:"",
        active5:"",
        active6:"",
        active7:"",
        active8:"",
    }
    res.render('about',obj)
})

router.get('/login',(req,res)=>{
    res.render('login',{
        active1:"",
        active2:'',
        active4:"",
        active5:"",
        active6:"",
        active7:"active",
        active8:"",
    })
})
router.get('/admin',(req,res)=>{
    res.render('admin',{
        active1:"",
        active2:'',
        active4:"",
        active5:"",
        active6:"",
        active7:"",
        active8:"active",
    })
})

router.get('/register',(req,res)=>{
    res.render('form')
});
router.get('/docsupload',(req,res)=>{
    res.render('docs')
})


router.get('/verify',registrationController.verifymail);


router.post('/contactupdate',contactController)
router.post('/docsupload',docsController)
router.post("/register",registrationController.registrationController);
module.exports=router;
