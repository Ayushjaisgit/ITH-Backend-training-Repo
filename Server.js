const express = require('express')
const router = express.Router();
const app = express()
const port = 5000

app.use(express.json())

// available Routes

app.use('/admin', require('./Routes/user')) 
app.use('/user', require('./Routes/task')) 


app.listen(port, () => {
    console.log(`Server Running at http://localhost:${port}`)
})

module.exports = router ;