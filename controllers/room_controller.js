const express = require("express");
const router = express.Router();



// MIDDLEWARE
router.use(express.json());


// MODEL IMPORT
const db = require("../models");


// new route - http://localhost:XXXX/products/new
// GET request for new products template
router.get("/new", (req, res) => {
    res.render("new.ejs");
  });


router.get("/", async (req, res) => {
  
    try{
  
      const allRooms = await db.Room.find()
      const context = { rooms: allRooms };
      console.log(allRooms)
      res.render("index.ejs", context);
  
  } catch(err){
      // throw new Error(err)
      console.log(err)
      res.redirect('/404')
  }  
  });



// show route - http://localhost:XXXX/products/0
// GET request for one product template
router.get("/:productIndex", async (req, res) => {


    try{
  
      const foundRoom = await db.Room.findById(req.params.productIndex)
      // let product = products[req.params.productIndex];
      res.render("show.ejs", { product: foundRoom, id: foundRoom._id });
  
  }catch(err){
      // throw new Error(err)
      console.log(err)
      res.redirect('/404')
  }
  });

   // index - http://localhost:XXXX/products
  // POST request for all products from products DB

// edit route -  http://localhost:XXXX/products/<productId>/edit
// GET request for product edit template
router.get("/:productId/home", async (req, res) => {
    // const foundProduct = products[req.params.productId];
    // const context = { product: foundProduct, id: req.params.productId };
    // res.render("edit.ejs", context);
  
    try{
  
      const foundRoom = await db.Room.findById(req.params.productId)
      console.log(foundRoom)
      // let product = products[req.params.productIndex];
      res.render("edit.ejs", { product: foundRoom, id: foundRoom._id });
  
  }catch(err){
  
      // throw new Error(err)
      console.log(err)
      res.redirect('/404')
  }
  });


// destroy - http://localhost:XXXX/products/<productId>
// DELETE request for removing one product from products DB
// router.delete("/:productId", async (req, res) => {
//     try{
  
//       const foundRoom = await db.Room.findByIdAndDelete(req.params.productId)
//       console.log(foundRoom)
//       return res.redirect("/accounts");
  
//   }catch(err){
//       // throw new Error(err)
//       console.log(err)
//       res.redirect('/404')
//   }
//   });


  module.exports = router;