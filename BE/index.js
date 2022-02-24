// Imports
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const { reseedDB } = require("./reseedDB");

// App Setup
const app = express();
const port = 4000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//cors stuff
app.use(
  cors({
    credentials: true,
  })
);

// uncomment if want to reseed data
// reseedDB();

// Store Routes
app.use("/store/", require("./Store/storeRoutes"));



app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}!`);
});
