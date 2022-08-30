const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema({
    location: {type: String},
    phone: {type: String},
    email: {type: String},
}, {timestamps: true,
})

const Hotel = mongoose.model('Hotel', hotelSchema)

module.exports = Hotel