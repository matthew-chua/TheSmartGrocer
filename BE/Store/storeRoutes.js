const express = require("express");

const {
    fetchStoreHandler
} = require("./storeController");

const {
    initMap
} = require("../test");
const router = express.Router();

// Routes (They all should just be 1 line)

// Fetch User
router.get("/", fetchStoreHandler);

router.get("/getallNTUC", initMap);

module.exports = router;