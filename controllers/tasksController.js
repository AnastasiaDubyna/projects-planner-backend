const tasksData = require('../data');

const getAllTasks = (req, res) => {
    res.send({
        success: true, 
        tasks: tasksData
    })
};

module.exports = {
    getAllTasks
};