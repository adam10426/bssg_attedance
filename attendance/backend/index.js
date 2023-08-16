const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./config/db.config')


const app = express()

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


module.exports =  app
