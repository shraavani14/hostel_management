const db = require("../config/db");

exports.addEvent = (req, res) => {
  const { name, date } = req.body;

  db.query(
    "INSERT INTO Events (name, date) VALUES (?, ?)",
    [name, date],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Event Added" });
    }
  );
};

exports.getEvents = (req, res) => {
  db.query("SELECT * FROM Events", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};