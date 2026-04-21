const db = require("../config/db");

exports.addComplaint = (req, res) => {
  const { description } = req.body;

  db.query(
    "INSERT INTO Complaints (description) VALUES (?)",
    [description],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Complaint Added" });
    }
  );
};

exports.getComplaints = (req, res) => {
  db.query("SELECT * FROM Complaints", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};