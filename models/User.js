const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: { type: String, required: [true, "email cannot be empty"], unique: [true, "This email already exists! Try signing in!"]},
    phone: { type: String, unique: [true, "This phone number already exists! Try signing in!"]},
    username: {type: String, required: [true, "username cannot be empty"], unique: [true, "This username already exists! Try signing in!"]}
}, {timestamps: true,
})

const User = mongoose.model('User', userSchema)

module.exports = User