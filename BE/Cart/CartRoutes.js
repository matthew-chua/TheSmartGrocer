const express = require("express");

const {
    returnCheapest,
    returnNearest
} = require("./CartController");

const router = express.Router();

// Routes (They all should just be 1 line)

// get nearest
router.get("/nearest", returnNearest);

// get cheapest
router.get("/cheapest", returnCheapest);


module.exports = router;