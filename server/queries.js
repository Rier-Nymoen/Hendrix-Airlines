const Pool = require('pg').Pool
const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "hendrix",
    port: 5432,
    database: "postgres"
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users', (error, results)=>{
    if(error){
        response.sendStatus(503);
    } else {
        response.status(200).json(results.rows);
    }
})
}

const getUserByEmail = (request, response) => {
  const email = request.params.email;
  console.log(request.params);

  pool.query('SELECT * FROM users WHERE email = $1', [email], (error, results) => {
    if (error) {
        response.sendStatus(503);
    } else {
        response.status(200).json(results.rows);
    }
  })
}

const createUser = (request, response) => {
  const {email, password} = request.body

  pool.query('INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *', [email, password], (error, results) => {
    if (error) {
        response.sendStatus(503);
    } else {
        response.status(201).send(`User added with email: ${results.rows[0].id}`)
    }
  })
}

const updateUser = (request, response) => {
  const email = request.params.email;
  const {password} = request.body;

  pool.query('UPDATE users SET password = $1 WHERE email = $2', [password, email], (error, results) => {
      if (error) {
          response.sendStatus(503);
      } else {
          response.status(200).send(`User modified with email: ${email}`);
      }
    })
}

const deleteUser = (request, response) => {
  const email = request.params.email;

  pool.query('DELETE FROM users WHERE email = $1', [email], (error, results) => {
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

  pool.query('SELECT * FROM FlightExample WHERE Airport = $1', [airport] ,(error, results) =>{
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
  getUsers,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
  getFlightsByAirport
}
