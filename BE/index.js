// Imports
const express = require("express");
const sqlite3 = require('sqlite3').verbose();
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
require("dotenv").config();

// App Setup
const app = express();
const port = 4000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//cors stuff
app.use(cors({
    credentials: true
  }));

// DB Config
// const password = process.env.MONGO_PASSWORD;
// const username = process.env.MONGO_USER;
// const uri = `mongodb+srv://${username}:${password}@cluster0.ce42r.mongodb.net/thesmartgrocer`;

// mongoose
// .connect(uri)
// .then((result) => {
//     console.log("CONNECTED TO DB");
// })
// .catch((err) => {
//     console.log("ERROR", err);
// });

// sqlite config
let db = new sqlite3.Database('./db/groceries.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

// Store Routes
app.use("/store/", require("./Store/storeRoutes"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT||port, () => {
    console.log(`Example app listening on port ${port}!`);
  });