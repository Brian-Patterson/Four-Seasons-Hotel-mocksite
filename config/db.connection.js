// In db.connection.js

const mongoose = require('mongoose');

// environment loading .env file into process.env object 
require('dotenv').config();

// console.log(process.env.MONGODB_URI)

// get the MongoDB URL from .env file
// const connectionStr = process.env.MONGODB_URI;

// mongoose.connect(connectionStr);

mongoose.connect( process.env.MONGODB_URI || "mongodb+srv://brian:brian@cluster0.ubtyygm.mongodb.net/?retryWrites=true&w=majority");

mongoose.connection.on('connected', () => {
  console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected ... 🙌 🙌 🙌`); 
});

mongoose.connection.on('error', (error) => {
  console.log('MongoDB connection error 😥', error);
});

mongoose.connection.on('disconnected', () => console.log('MongoDB disconnected  ⚡️ 🔌 ⚡️'));