const News = require("../db/models/newsSchema")

const newsController=async (req,res)=>{
    try {
        const news=new News({
            headline:req.body.headline,
            fullnews: req.body.fullnews
        })
        await news.save();
        req.flash('success','News updated successfully...')
        res.redirect('./admin_route')
    } catch (error) {
        req.flash('failure','Sorry something went wrong....')

        console.log(error);
    }
    
    
}
module.exports=newsController;