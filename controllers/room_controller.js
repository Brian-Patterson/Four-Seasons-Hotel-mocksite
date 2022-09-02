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
        const hotel = await db.Hotel.findById(req.params.hotelId)
        const context = {room: room, hotel: hotel }
        res.render("roomEdit.ejs", context)
    } catch(err){
        console.log(err)
        res.redirect('/404')
    }
  });


  router.put("/:hotelId/:roomId", async (req, res) => {

    try{
      const updatedRoomData = req.body;
      const hotelId = req.params.hotelId;
      const roomId = req.params.roomId;
    // const updatedUser = req.body.user;
      await db.Room.findByIdAndUpdate(req.params.roomId, updatedRoomData, {new:true})
      res.redirect(`/rooms/${hotelId}/${roomId}/confirmation`);
      console.log("ROOM", req.body)
    }catch(err){
      console.log(err)
      res.redirect('/404')
    }

    
  });


  router.get('/:hotelId/:roomId/confirmation', async (req, res) => {
        const hotel = await db.Hotel.findById(req.params.hotelId)
        const room = await db.Room.findById(req.params.roomId)
        const context = {hotel: hotel, room: room}
    res.render('confirmation.ejs', context)
})

//   Put route



  




  module.exports = router;