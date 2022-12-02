const express=require('express');
const app=express();
const hbs=require('hbs');
const path =require('path')
const mainRoute=require('./routes/mainRoute')
const adminRoute=require('./routes/adminRoute')

require(__dirname+'/db/conn.js')
const rc=require(__dirname+'/controllers/registrationController')

const port=process.env.PORT || 3000;
app.set('view engine','hbs')

const partialpath=path.join(__dirname,'/partials');
const staticpath=path.join(__dirname,"/public")
  
app.use(express.static(staticpath))
hbs.registerPartials(partialpath);
//app.post('/register',rc);


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/',mainRoute)
// app.use('/',student)
app.use('/admin',adminRoute)

app.listen(port,()=>{
    console.log(`server started listening on port ${port}`);
})
