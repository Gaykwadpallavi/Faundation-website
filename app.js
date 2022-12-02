const express=require('express');
const app=express();
const ejs=require('ejs');
const path =require('path')
const mainRoute=require('./routes/mainRoute')
const adminRoute=require('./routes/adminRoute');
const bodyParser = require('body-parser');
require(__dirname+'/db/conn.js')
const session=require('express-session')
const rc=require(__dirname+'/controllers/registrationController')

const port=process.env.PORT || 3000;
app.set('views',path.join(__dirname,'/views'))
app.set('view engine','ejs')

const staticpath=path.join(__dirname,"/public")
const partialpath=path.join(__dirname,'/partials');
const uploadpath=path.join(__dirname,"/uploads")
const flash=require('connect-flash')
  
app.use(express.static(staticpath))
// hbs.registerPartials(partialpath);
app.use(express.static(uploadpath))
//app.post('/register',rc);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(flash())
app.use(session({
    secret:'secret',
    cookie:{maxAge:60000},
    resave:false,
    saveUninitialized:false
}))

// app.use(express.json())
// app.use(express.urlencoded({extended:false}))
app.use('/',mainRoute)
// app.use('/',student)
app.use('/admin',adminRoute)

app.listen(port,()=>{
    console.log(`server started listening on port ${port}`);
})
