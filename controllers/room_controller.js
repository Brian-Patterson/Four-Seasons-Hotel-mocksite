const express = require("express");
const router = express.Router();



// MIDDLEWARE
router.use(express.json());


// MODEL IMPORT
const db = require("../models");


router.get("/:objectId", async (req, res) => {
    try{
      const hotel = await db.Hotel.findById(req.params.objectId);
      const allRooms = await db.Room.find({hotel:req.params.objectId})
      const context = { hotel: hotel, allRooms: allRooms } ;
      console.log(hotel);
      res.render("index.ejs", context);
  
  } catch(err){
      // throw new Error(err)
      console.log(err)
      res.redirect('/404')
  }  
  });



// show route - http://localhost:XXXX/products/0
// GET request for one product template
// router.get("/:objectId", async (req, res) => {


//     try{
  
//       const foundRoom = await db.Room.findById(req.params.objectId)
//       // let product = products[req.params.productIndex];
//       res.render("show.ejs", { room: foundRoom, id: foundRoom._id });
  
//   }catch(err){
//       // throw new Error(err)
//       console.log(err)
//       res.redirect('/404')
//   }
//   });

   // index - http://localhost:XXXX/products
  // POST request for all products from products DB




  module.exports = router;