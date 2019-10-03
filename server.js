/**
* Main file
**/

/* 2019 Sep 28 Modified by Xiaoxuan Li, in order to connect frontend*/
const express = require ("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

require('./models/db.js');

const userRoutes = require("./routes/userRoutes.js");
app.use("/user", userRoutes);

const artifactRoutes = require("./routes/artifactRoutes.js");
app.use("/artifact", artifactRoutes);

if (process.env.NODE_ENV === 'production'){
  app.use(express.static('Frontend/build'));

  app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//Run Server!
const port = process.env.PORT || 6100;
app.listen(port, () => console.log(`Server started on port ${port}`));
