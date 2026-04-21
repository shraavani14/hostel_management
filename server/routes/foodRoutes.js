const express = require("express");
const router = express.Router();
const { addFood, getFood } = require("../controllers/foodController");

router.post("/", addFood);
router.get("/", getFood);

module.exports = router;