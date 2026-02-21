const express = require("express");
const router = express.Router();
const controller = require("../controllers/players.controller");

router.post("/",controller.createPlayer);
router.get("/:id", controller.getPlayer);
router.get("/", controller.getAllPlayers);

module.exports = router;