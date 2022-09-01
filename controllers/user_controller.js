const express = require("express");
const router = express.Router();



// MIDDLEWARE
router.use(express.json());


// MODEL IMPORT
const db = require("../models");


  // index - http://localhost:XXXX/products
  // POST request for all products from products DB
  router.get("/", async (req, res) => {
  
    try{
  
      const allUsers = await db.User.find()
      const context = { users: allUsers };
      // console.log(allUsers)
      res.render("accounts.ejs", context);
  
  } catch(err){
      // throw new Error(err)
      console.log(err)
      res.redirect('/404')
  }  
  });


  // show route - http://localhost:XXXX/products/0
// GET request for one product template
router.get("/:userName", async (req, res) => {
  
  try{
    const userName = req.params.userName;
    const thisUser = await db.User.findOne({username: userName})
    context = {thisUser: thisUser}
    res.render("accountsShow.ejs", context);
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
  router.get("/", async (req, res) => {
  
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
router.delete("/:userName", async (req, res) => {
  try{
    // const userValue = req.params.username
    console.log(req.params.userName)
    const foundUser = await db.User.findOne({username: req.params.userName});
    console.log(foundUser)
    await db.User.findByIdAndDelete(foundUser._id);
    return res.redirect("/users");

  }catch(err){
    // throw new Error(err)
    console.log(err)
    res.redirect('/404')
}
});



  module.exports = router;
