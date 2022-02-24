const express = require("express");
const { route } = require("express/lib/application");

const {
    fetchStoreHandler
} = require("./storeController");
const router = express.Router();

// Routes (They all should just be 1 line)

// Fetch User
router.get("/:storeID", fetchStoreHandler);

module.exports = router;