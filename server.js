// importing statements
const express = require('express') // commonJS import statement
const methodOverride = require('method-override');

// CONTROLLER IMPORTS
const productsController = require('./controllers/products_controller')


// app configuration
const app = express()
const PORT = 5000
app.set('view engine', 'ejs')


// MIDDLEWARE
app.use(express.static('public'));
app.use(methodOverride('_method'));

// MIDDLEWARE - code that runs for every request (before routes)
// Router - Products
app.use('/products', productsController)




// SERVER
app.listen(4000, () => console.log('starting server at port:', PORT))