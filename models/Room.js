const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    roomNumber: { type: String, required: [true, "room number cannot be empty"]},
    price: { type: Number, min: [0, 'you cannot add negative price values'], required: [true, "price cannot be empty"]},
    bedCount: {type: Number},
    available: {type: Boolean, default: true},
    user: {type: String, required: [true, "empty string"]},
    hotel: {type: mongoose.Types.ObjectId, ref: "Hotel"},
    userArrival: {type: String, required: [true, "empty string"]},
    userDeparture: {type: String, required: [true, "empty string"]},
}, {timestamps: true,
})

const Room = mongoose.model('Room', roomSchema)

module.exports = Room