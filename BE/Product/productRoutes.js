const express = require("express");

const {
    fetchProductHandler
} = require("./productController");

const router = express.Router();

// Routes (They all should just be 1 line)

// Fetch User
router.get("/:keyword", fetchProductHandler);
module.exports = router;