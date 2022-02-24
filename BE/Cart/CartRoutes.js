const express = require("express");

const {
    keywordSearch
} = require("./CartController");

// Routes (They all should just be 1 line)

// Fetch User
router.get("/:keyword", keywordSearch);

module.exports = router;