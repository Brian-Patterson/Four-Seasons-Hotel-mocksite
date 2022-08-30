
require('./config/db.connection')
const mongoose = require('mongoose')

const db = require('./models/')
// User model
const rooms = require('./models/rooms_model')
// const hotels = require('./models/hotel_model')

// Function call
db.Room.insertMany(rooms).then(function(){
    console.log("Data inserted")  // Success
}).catch(function(error){
    console.log(error)      // Failure
});

// db.Hotel.insertMany(hotels).then(function(){
//     console.log("Data inserted")  // Success
// }).catch(function(error){
//     console.log(error)      // Failure
// });

setTimeout(()=>{mongoose.connection.close()},3000)