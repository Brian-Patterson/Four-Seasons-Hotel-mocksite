const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    roomNumber: { type: String, required: [true, "room number cannot be empty"]},
    price: { type: Number, min: [0, 'you cannot add negative price values'], required: [true, "price cannot be empty"]},
    bedCount: {type: Number},
    availability: {type: String},
}, {timestamps: true,
})

const Room = mongoose.model('Room', roomSchema)

module.exports = Room