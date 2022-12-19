const express = require('express');
const router = express.Router();
const controller = require('../controllers/tasksController');


router.get("/getAll", controller.getAllTasks);

router.post("/postTask", controller.postTask);

router.put("/editTask/:id", controller.editTask);

module.exports = router;