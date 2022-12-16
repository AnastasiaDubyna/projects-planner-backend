const tasksData = require('../data');
const { isTaskValid } = require('../services/taskService');

const getAllTasks = (req, res) => {
    res.send({
        success: true, 
        tasks: tasksData
    })
};

const postTask = ({body}, res) => {
    if (isTaskValid(body)) {
        tasksData.push(body);
        res.send({success: true});
    } else {
        res.send({success: false, errorMessage: "Please fill all inputs"});
    }
};

module.exports = {
    getAllTasks, 
    postTask
};