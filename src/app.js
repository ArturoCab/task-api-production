const express = require("express");
const cors = require("cors");

const healthRoutes = require("./routes/health.routes");

const app=express();

app.use(cors());
app.use(express.json());

app.get("/health", healthRoutes);

module.exports = app;