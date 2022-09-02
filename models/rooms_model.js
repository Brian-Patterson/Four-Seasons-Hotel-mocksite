const { Room, Hotel } = require(".");

//push rooms to db using dbTest.js
const rooms = [
    {
        roomNumber: 101,
        price: 200,
        bedCount: 3,
        available: true,
        hotel: "630e17247cdb23e3b56678f6",
        user: "",
        userArrival: "",
        userDeparture: "",
        imageAddress: "https://images.stockfreeimages.com/1694/sfixl/16949055.jpg",
        keyFeatures: "easy city access"
    },
    {
        roomNumber: 102,
        price: 300,
        bedCount: 4,
        available: true,
        hotel: "630e17247cdb23e3b56678f6",
        user: "",
        userArrival: "",
        userDeparture: "",
        imageAddress: "https://images.stockfreeimages.com/1552/sfixl/15526491.jpg",
        keyFeatures: "buttery furniture"
    },
    {
        roomNumber: 103,
        price: 400,
        bedCount: 5,
        available: true,
        hotel: "630e17247cdb23e3b56678f6",
        user: "",
        userArrival: "",
        userDeparture: "",
        imageAddress: "https://images.stockfreeimages.com/1439/sfixl/14398095.jpg",
        keyFeatures: "In-room Air Conditioning; Prime Weather"
    },
    {
        roomNumber: 101,
        price: 200,
        bedCount: 3,
        available: true,
        hotel: "630e17247cdb23e3b56678f7",
        user: "",
        userArrival: "",
        userDeparture: "",
        imageAddress: "https://images.stockfreeimages.com/1528/sfixl/15288105.jpg",
        keyFeatures: "BYOS; Mood Lighting"
    },
    {
        roomNumber: 102,
        price: 300,
        bedCount: 4,
        available: true,
        hotel: "630e17247cdb23e3b56678f7",
        user: "",
        userArrival: "",
        userDeparture: "",
        imageAddress: "https://images.stockfreeimages.com/1439/sfixl/14397797.jpg",
        keyFeatures: "In-room Box TV"
    },
    {
        roomNumber: 103,
        price: 400,
        bedCount: 5,
        available: true,
        hotel: "630e17247cdb23e3b56678f7",
        user: "",
        userArrival: "",
        userDeparture: "",
        imageAddress: "https://images.stockfreeimages.com/1467/sfixl/14672696.jpg",
        keyFeatures: "Customizable Room Layout"
    },
    {
        roomNumber: 101,
        price: 200,
        bedCount: 3,
        available: true,
        hotel: "630e17247cdb23e3b56678f8",
        user: "",
        userArrival: "",
        userDeparture: "",
        imageAddress: "https://images.stockfreeimages.com/1829/sfixl/18293737.jpg",
        keyFeatures: "Japanese Inspiration"
    },
    {
        roomNumber: 102,
        price: 300,
        bedCount: 4,
        available: true,
        hotel: "630e17247cdb23e3b56678f8",
        user: "",
        userArrival: "",
        userDeparture: "",
        imageAddress: "https://images.stockfreeimages.com/1747/sfixl/17474747.jpg",
        keyFeatures: "Modern"
    },
    {
        roomNumber: 103,
        price: 400,
        bedCount: 5,
        available: true,
        hotel: "630e17247cdb23e3b56678f8",
        user: "",
        userArrival: "",
        userDeparture: "",
        imageAddress: "https://images.stockfreeimages.com/1944/sfixl/19442891.jpg",
        keyFeatures: "Garden Access"
    },
];

module.exports = rooms