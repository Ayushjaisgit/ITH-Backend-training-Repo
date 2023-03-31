const express = require('express');
const router = express.Router();
let middleware = require("../Middleware/Validators") 

router.use(express.json()) 
router.use(middleware.validateMethod);
    // **************************************GET METHOD USED **************************************************   

    // Admin Get All the tasks
 router.get('/users/tasks/all',middleware.checkRequestBody ,(req, res) => {
     res.json({requestBody: req.body}) 
     console.log(req.body); 
    })

    // Admin Get Specific user With Task
  router.get('/users/taskId/:id',middleware.checkRequestBody ,(req, res) => {
        res.json({requestBody: req.body}) 
        console.log(req.body);
        // console.log(req.url)
      })
      
      // **********************************POST METHOD USED ************************************************
      
      // Admin Creating a user 
  router.post('/createuser', middleware.checkRequestBody,  (req, res) => {
        // res.json({requestBody: req.body}) 
        res.status(201).send('User Created Successfully');
        console.log(req.body);
      })
      
  // ******************************PATCH METHOD API's **************************************************
  
  // Edit an Existing User 
  router.patch('/editUser/:Id', (req, res) => {
    req.body.name = "Saurabh"
    req.body.age = "23"
    req.body.designation = "SDE"
    console.log(req.body)
    res.status(200).send('User Account Updated Successfully');
  })
  
  //*******************************************DELETE METHOD**************************************** */
  
  // data from Params
  router.delete('/removeUser/:Id',middleware.checkRequestId,(req, res) => {
    
    let detdata = req.body 
    detdata = {}
    console.log(detdata)
    res.status(200).send('User Deleted Successfully');

  })


module.exports = router;