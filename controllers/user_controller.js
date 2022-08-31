const express = require("express");
const router = express.Router();



// MIDDLEWARE
router.use(express.json());

// MODEL IMPORT
const db = require("../models");


// show route - http://localhost:XXXX/products/0
// GET request for one product template
router.get("/", (req, res) => {
  res.render("accounts.ejs");

    try{

  
  }catch(err){
      // throw new Error(err)
      console.log(err)
      res.redirect('/404')
  }
  });



  router.get("/accounts/accountSubmission", async (req, res) => {
      try{
      
        res.render("newAccount.ejs");
    }catch(err){
        // throw new Error(err)
        console.log(err)
        res.redirect('/404')
    }
    });

    


  // create route - http://localhost:XXXX/products/
// POST request for adding new product to products DB
router.post("/", async (req, res) => {
  const userAccount = req.body;
  try {
    const newUserAccount = await db.User.create(userAccount);

    console.log(newUserAccount, "this is the userAccount");

    res.redirect("/users");

  } catch (err) {
    console.log(err)
    res.redirect('/404')
    // throw new Error(err);
  }
});

  
  
  // index - http://localhost:XXXX/products
  // POST request for all products from products DB
  router.get("/accounts", async (req, res) => {
  
    try{
  
      const allUsers = await db.User.find()
      const context = { users: allUsers };
      console.log(allUsers)
      res.render("accounts.ejs", context);
  
  } catch(err){
      // throw new Error(err)
      console.log(err)
      res.redirect('/404')
  }  
  });
  

  // destroy - http://localhost:XXXX/products/<productId>
// DELETE request for removing one product from products DB
router.delete("/accounts/:userId", async (req, res) => {
  try{

    const foundUser = await db.User.findByIdAndDelete(req.params.userId)
    console.log(foundUser)
    return res.redirect("/accounts");

  }catch(err){
    // throw new Error(err)
    console.log(err)
    res.redirect('/404')
}
});




  module.exports = router;
