const db = require("../config/db");

exports.addSport = (req, res) => {
  const { sport_name } = req.body;

  db.query("INSERT INTO Sports (sport_name) VALUES (?)", [sport_name], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Sport Added" });
  });
};

exports.getSports = (req, res) => {
  db.query("SELECT * FROM Sports", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};