const tasksData = require('../data');
const { isTaskValid } = require('../services/taskService');

const getAllTasks = (req, res) => {
    res.send({
        success: true, 
        tasks: tasksData
    })
};

const getSearchedTasks = ({params: {searchValue}}, res) => {
    const data = tasksData.filter(task => task.resume.includes(searchValue));
    console.log(tasksData);
    console.log(data);
    res.send({data});
}

const postTask = ({body}, res) => {
    if (isTaskValid(body)) {
        tasksData.push(body);
        res.send({success: true});
    } else {
        res.send({success: false, errorMessage: "Please fill all inputs"});
    }
};

const editTask = ({params: {id}, body}, res) => {
    const taskIndex = tasksData.findIndex(task => task.id === id);
    tasksData[taskIndex] = body;
    res.send({success: true});
};

module.exports = {
    getAllTasks, 
    postTask, 
    editTask, 
    getSearchedTasks
};