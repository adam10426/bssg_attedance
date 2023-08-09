const express = require('express')
const cors = require('cors')
const db = require('./config/db.config')
const memberRoutes = require('./routes/members.routes')

const app = express()
app.use(cors())
db.connect((err) => { 
    if (err)
        throw err
    console.log("db connected successfully")
})

module.exports =  app
