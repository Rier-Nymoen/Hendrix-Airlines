const Pool = require('pg').Pool
const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "hendrix",
    port: 5432,
    database: "postgres"
})

const getAccounts = (request, response) => {
    pool.query('SELECT * FROM account', (error, results)=>{
    if(error){
        response.sendStatus(503);
    } else {
        response.status(200).json(results.rows);
    }
})
}

const getAccountByEmail = (request, response) => {
  const email = request.params.email;
  console.log(request.params);

  pool.query('SELECT * FROM account WHERE email = $1', [email], (error, results) => {
    if (error) {
        response.sendStatus(503);
    } else {
        response.status(200).json(results.rows);
    }
  })
}

const createAccount = (request, response) => {
  const {address,
      address2,
      city,
      dob,
      email,
      fname,
      gender,
      lname,
      mname,
      password,
      phone,
      state,
      suffix,
      zip
  } = request.body

  pool.query('INSERT INTO account VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *',
   [email, password, fname, mname, lname, suffix, dob, gender, address, address2, phone, city, zip, state], (error, results) => {
    if (error) {
        response.sendStatus(503);
    } else {
        response.status(201).send(`User added with email: ${results.rows[0].id}`)
    }
  })
}

const updateAccount = (request, response) => {
  const email = request.params.email;
  const {password} = request.body;

  pool.query('UPDATE account SET password = $1 WHERE email = $2', [password, email], (error, results) => {
      if (error) {
          response.sendStatus(503);
      } else {
          response.status(200).send(`User modified with email: ${email}`);
      }
    })
}

const deleteAccount = (request, response) => {
  const email = request.params.email;

  pool.query('DELETE FROM account WHERE email = $1', [email], (error, results) => {
    if (error) {
        response.sendStatus(503);
    } else {
        response.status(200).send(`User deleted with email: ${email}`);
    }
  })
}

const getFlightsByAirport = (request, response) => {
  //parameters for the route, request.body is the body of the request, req.query is query parameters
  const airport = request.params.airport;

  pool.query('SELECT * FROM Flight WHERE Source_gate_code = $1', [airport] ,(error, results) =>{
    if(error)
    {
      response.sendStatus(503);
    }
    else{
      response.status(200).json(results.rows)
    }
  })

}

module.exports = {
  getAccounts,
  getAccountByEmail,
  createAccount,
  updateAccount,
  deleteAccount,
  getFlightsByAirport
}
