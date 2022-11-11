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

app.get('/accounts', db.getAccounts)
app.get('/accounts/:email', db.getAccountByEmail)
app.post('/accounts', db.createAccount)
app.put('/accounts/:email', db.updateAccount)
app.delete('/accounts/:email', db.deleteAccount)

app.get('/book/:airport', db.getFlightsByAirport)
app.get('/book/:source/:destination/:departure/:passengers', db.getFlightsBySearch)
app.get('/book/:regno/seats', db.getPlaneLayout)

app.listen(port, () => {console.log(`Server started on port ${port}`)})
