const { Room, Hotel } = require(".");

//push rooms to db using dbTest.js
const rooms = [
    {
        roomNumber: 101,
        price: 200,
        bedCount: 3,
        available: true,
        hotel: "630e17247cdb23e3b56678f6",
    },
    {
        roomNumber: 102,
        price: 300,
        bedCount: 4,
        available: true,
        hotel: "630e17247cdb23e3b56678f7",
    },
    {
        roomNumber: 103,
        price: 400,
        bedCount: 5,
        available: true,
        hotel: "630e17247cdb23e3b56678f8",
    },
];

module.exports = rooms