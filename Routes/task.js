const express = require('express');
const router = express.Router();
var middleware = require("../Middleware/Validators")

router.use(middleware.validateMethod);
router.use(express.json())
// **************************************GET METHOD USED **************************************************   

// User Get All the tasks
router.get('/tasks/all', middleware.checkRequestBody, (req, res) => {
  res.json({ requestBody: req.body })
  console.log("List of all the tasks assigned to users")
  console.log(req.body);
})

// Get Specific Task With TaskId
router.get('/task/:Id', (req, res) => {
  res.send(req.body.name + " With ID" + req.params.Id +" Was Assigned the task - "+ req.body.task);
})

// **********************************POST METHOD USED ************************************************

// User Creating a task
router.post('/task/create', middleware.checkRequestBody, (req, res) => {
  res.json({ requestBody: req.body })
  console.log("Subject "+ req.body.subject," Assigned By :"+  req.body.assignedBy," Task:"+ req.body.task);
})

// ******************************PATCH METHOD API's **************************************************

// Edit an Existing Task 
router.patch('/task/edit/:Id', (req, res) => {
  req.body.task = "Do CRUD operation Using Node Only"
  console.log(req.body)

})

//*******************************************DELETE METHOD**************************************** */

// Delete existing Task
router.delete('/users/remove/:Id', middleware.checkRequestId, (req, res) => {

  let detdata = req.body 
  detdata = {}
  console.log(detdata)
  res.status(200).send('Task Deleted Successfully');

})


module.exports = router;