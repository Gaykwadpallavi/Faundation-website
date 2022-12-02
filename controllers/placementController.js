const Docs = require("../db/models/docsSchema");
const multer = require("multer");
const path=require('path')
const Placement = require("../db/models/placementSchema");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage }).single("pics");
const placementController = async (req, res) => {
    upload(req,res,(err)=>{
  if (err) {
    console.log(err);
    return;
  }
  const placement = new Placement({
    image: req.file.filename,
    name: req.body.name,
    position: req.body.position,
    desc: req.body.desc,
  });

  placement
    .save()
    .then(() => {
      req.flash("success", "News updated successfully...");
      res.redirect("./admin_route");
    })
    .catch((error) => {
      req.flash("failure", "Oops!... something went wrong");
    });
})
};
module.exports = placementController;
