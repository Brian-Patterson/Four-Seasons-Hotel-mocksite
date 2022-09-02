// importing statements
const express = require('express') // commonJS import statement
const methodOverride = require('method-override');

// CONTROLLER IMPORTS
const userController = require('./controllers/user_controller')
const roomController = require('./controllers/room_controller')

// app configuration
const app = express()
const PORT = process.env.PORT || 4000


// MIDDLEWARE
app.use(express.static('public'));
app.use(methodOverride('_method'));
require("./config/db.connection");
app.use(express.urlencoded({ extended: false }));

// MIDDLEWARE - code that runs for every request (before routes)
// Router - Products
// app.use('/products', productsController)

// MIDDLEWARE - code that runs for every request (before routes)
// Router - Products
app.use('/users', userController)
app.use('/rooms', roomController)

app.set('view engine', 'ejs')

const db = require("./models");
//  home route
app.get('/', async (req, res) => {
    try {
    const hotels = await db.Hotel.find();
    const context = {hotels: hotels}
    res.render(`home.ejs`, context)
} catch (err) {
    console.log(err)
    res.redirect('/404')
    // throw new Error(err);
  }
})


// 404 Wildcard Route
app.get('*', (req,res)=>{
    res.render('404')
})

// SERVER
app.listen(process.env.PORT || 4000, () => console.log('starting server at port:', PORT))