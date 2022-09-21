const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');


// middleware
app.use(express.json());
app.use(cors());

// routes
const tourRoute = require('./routes/tour.routes');

app.get('/', (req, res) => {
  res.send('Hello World! Route ki dekha jay')
})

// posting to database
app.use('api/v1/tour', tourRoute )

// get from database
// app.use("api/v1/tour", )

module.exports = app;