const express = require("express");

const Stage_Control = require("../server/stage_controller")

const router = express.Router();

router.get("/stage", Stage_Control.getStages);
router.get("/stage/:id", Stage_Control.getStageById)
router.post("/stage", Stage_Control.createStage);

module.exports = router;
