const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')

const cors = require("cors"); // so we can make requests from a different ip or port
const corsOptions = {
   origin:'*',
   credentials:true,
   optionSuccessStatus:200,
}

const app = express()
const port = 5000

app.use(cors(corsOptions))

app.set('json spaces', 4)
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/users', db.getUsers)
app.get('/users/:email', db.getUserByEmail)
app.post('/users', db.createUser)
app.put('/users/:email', db.updateUser)
app.delete('/users/:email', db.deleteUser)

app.listen(port, () => {console.log(`Server started on port ${port}`)})
