const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mysql = require('mysql')
const connection = require('express-myconnection')
const config = require('./config/config')
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

app.use(connection(mysql, {
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
  port: config.port
}, 'single'))

app.listen(config.port)
console.log(`Server started on port ${config.port}`)
