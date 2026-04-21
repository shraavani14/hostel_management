const express = require("express");
const { getRooms, allocateRoom } = require("../controllers/roomController");

const router = express.Router();

router.get("/", getRooms);
router.post("/allocate", allocateRoom);

module.exports = router;