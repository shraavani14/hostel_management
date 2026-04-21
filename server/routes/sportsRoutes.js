const express = require("express");
const router = express.Router();
const { addSport, getSports } = require("../controllers/sportsController");

router.post("/", addSport);
router.get("/", getSports);

module.exports = router;