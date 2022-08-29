const express = require("express");
const router = express.Router();



// MIDDLEWARE
router.use(express.json());


// MODEL IMPORT
const db = require("../models");


// show route - http://localhost:XXXX/products/0
// GET request for one product template
router.get("/:productIndex", async (req, res) => {


    try{
  
      const foundProduct = await db.User.findById(req.params.productIndex)
      // let product = products[req.params.productIndex];
      res.render("show.ejs", { product: foundProduct, id: foundProduct._id });
  
  }catch(err){
      // throw new Error(err)
      console.log(err)
      res.redirect('/404')
  }
  });
  
  // index - http://localhost:XXXX/products
  // POST request for all products from products DB
  router.get("/", async (req, res) => {
  
    try{
  
      const allProducts = await db.Products.find()
      const context = { products: allProducts };
      console.log(allProducts)
      res.render("index.ejs", context);
  
  } catch(err){
      // throw new Error(err)
      console.log(err)
      res.redirect('/404')
  }  
  });




  module.exports = router;