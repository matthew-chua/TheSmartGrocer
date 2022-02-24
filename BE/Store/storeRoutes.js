const express = require("express");

const {
    fetchStoreHandler
} = require("./storeController");
const router = express.Router();

// Routes (They all should just be 1 line)

// Fetch User
router.get("/", fetchStoreHandler);

module.exports = router;