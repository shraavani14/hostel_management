const db = require("../config/db");

exports.getRooms = (req, res) => {
  db.query("SELECT * FROM Rooms", (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
};

exports.allocateRoom = (req, res) => {
  const { student_id, room_id } = req.body;

  db.query(
    "INSERT INTO Allocations (student_id, room_id) VALUES (?, ?)",
    [student_id, room_id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ message: "Room Allocated" });
    }
  );
};