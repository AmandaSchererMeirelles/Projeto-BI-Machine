
const express = require('express')
const app = express()
const port = 3000
require('dotenv').config();
const { Pool, Client } = require('pg')


const cors = require('cors');
app.use(cors());

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


 
const client = new Client({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})



app.post('/user', async function (req, res) {
    await client.connect()
    console.log(req.body)
    const {nome, telefone, email, segmento} = req.body
    await client.query(`insert into user_account(nome, email, telefone, segmento) 
    values('${nome}', '${email}', '${telefone}', '${segmento}') `)
    res.send('Got a POST request');

  });
  

app.get('/', (req, res) => {
  res.send('Hello World!')
  pool.query("SELECT * FROM ")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})