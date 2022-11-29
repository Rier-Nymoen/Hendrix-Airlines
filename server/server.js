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
const port = 5005

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

app.get('/book/:source/:destination/:departure/:passengers', db.getFlightsBySearch)
app.get('/book/:regno/seats', db.getPlaneLayout)

app.get('/trips/:email', db.getTripsByEmail)
app.get('/trips/confirmation_no/:confirmation_no', db.getTripByConfirmationNo)
app.post('/trips', db.createTrip)
app.delete('/trips/:confirmation_no', db.deleteTrip)

app.post('/passenger', db.createPassenger)
app.get('/passenger/confirmation_no/:confirmation_no', db.getPassengersOnTrip)

app.post('/credit_card', db.createCreditCard)

app.put('/seats/:regno/:row/:column', db.updateSeat)

app.get('/book/:regno/seats', db.getPlaneLayout)

app.get('/credit_cards/:email', db.getCreditCardsByEmail)
app.delete('/credit_cards/:card_number', db.deleteCreditCard)


app.listen(port, () => {console.log(`Server started on port ${port}`)})
