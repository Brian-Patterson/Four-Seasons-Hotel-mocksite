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

  router.get("/:hotelId/:roomId", async (req, res)=> {
    try{
        const room = await db.Room.findById(req.params.roomId)
        const hotel = await db.Hotel.findById(req.params.hotelId)
        const context = {room: room, hotel: hotel }
        res.render("show.ejs", context)
    } catch(err){
        console.log(err)
        res.redirect('/404')
    }
  });



  router.get("/:hotelId/:roomId/edit", async (req, res)=> {
    try{
        const room = await db.Room.findById(req.params.roomId)
        const context = {room: room }
        res.render("roomEdit.ejs")
    } catch(err){
        console.log(err)
        res.redirect('/404')
    }
  });



  




  module.exports = router;