const express = require("express");
const cors = require("cors");
const playersRoutes = require("./routes/players.routes");

const healthRoutes = require("./routes/health.routes");

const app=express();

app.use(cors());
app.use(express.json());

app.use(express.json());
app.use("/health", healthRoutes);
app.use("/players",playersRoutes);


module.exports = app;