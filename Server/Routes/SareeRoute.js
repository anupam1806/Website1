const router = require('express').Router();
const SareeDetails = require("../Models/SareeList");

// Api to get the list of all the sarees
router.get("/showSarees", async (req,res)=>{
    const sarees = await SareeDetails.find();
    res.send(sarees);
})

// Api to add a new saree into the database
router.post("/addSaree", async (req, res) => {
    const newSaree = new SareeDetails({
        saree_images : req.body.saree_images,
        saree_name : req.body.saree_name,
        saree_price : req.body.saree_price,
        saree_material : req.body.saree_material,
    });
    // res.send(newSaree);
  try {
    const savedSaree = await newSaree.save();
    res.send(savedSaree);
  } catch (err) {
    res.status(200).send(err);
  }
});

module.exports = router;
