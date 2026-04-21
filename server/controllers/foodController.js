const db = require("../config/db");

exports.addFood = (req, res) => {
  const { item } = req.body;

  db.query("INSERT INTO FoodMenu (item) VALUES (?)", [item], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Food Added" });
  });
};

exports.getFood = (req, res) => {
  db.query("SELECT * FROM FoodMenu", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};