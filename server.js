const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const form = require('./routes/api/form')

// Run Express
const app = express()

// Cookies config
const keys = require('./config/keys').keys

// DB config
const db = require('./config/keys').keys

// Connect to Mongodb
mongoose
  .connect(db.mongo.url(), db.mongo.options)
  .then(() => console.log('Mongodb Connected'))
  .catch(err => console.error(err))

// Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Use Routes
app.use('/api/form', form)

// Server Port
const port =  process.env.PORT || 5000
app.listen(port, () => console.log(`Server running on port ${port}`))
