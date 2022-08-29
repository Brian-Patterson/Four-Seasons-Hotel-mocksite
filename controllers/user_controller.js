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
  
      const foundUser = await db.User.findById(req.params.productIndex)
      // let product = products[req.params.productIndex];
      res.render("show.ejs", { product: foundUser, id: foundUser._id });
  
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
  
      const allUsers = await db.User.find()
      const context = { users: allUsers };
      console.log(allUsers)
      res.render("accounts.ejs", context);
  
  } catch(err){
      // throw new Error(err)
      console.log(err)
      res.redirect('/404')
  }  
  });
  

  

  module.exports = router;