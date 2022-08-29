// importing statements
const express = require('express') // commonJS import statement
const methodOverride = require('method-override');

// CONTROLLER IMPORTS
const productsController = require('./controllers/products_controller')


// app configuration
const app = express()
const PORT = 4000
app.set('view engine', 'ejs')


// MIDDLEWARE
app.use(express.static('public'));
app.use(methodOverride('_method'));

// MIDDLEWARE - code that runs for every request (before routes)
// Router - Products
// app.use('/products', productsController)

// MIDDLEWARE - code that runs for every request (before routes)
// Router - Products
app.use('/products', productsController)

//  home route
app.get('/', (req, res) => {
    res.render(`home.ejs`)
})

// SERVER
app.listen(PORT, () => console.log('starting server at port:', PORT))