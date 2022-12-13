const express = require('express');
const router = express.Router();
const controller = require('../controllers/tasksController');

router.get("/all", controller.getAllTasks);

module.exports = router;