const express = require("express");
const cors = require("cors");

const roomRoutes = require("./routes/roomRoutes");
const eventRoutes = require("./routes/eventRoutes");
const foodRoutes = require("./routes/foodRoutes");
const cleaningRoutes = require("./routes/cleaningRoutes");
const sportsRoutes = require("./routes/sportsRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/rooms", roomRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/food", foodRoutes);
app.use("/api/cleaning", cleaningRoutes);
app.use("/api/sports", sportsRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));