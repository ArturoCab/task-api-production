const express = require("express");
const router = express.Router();
const controller = require("../controllers/scores.controller");


router.post("/",controller.postScore);
router.get("/", controller.getLeaderBoard);

module.exports = router;