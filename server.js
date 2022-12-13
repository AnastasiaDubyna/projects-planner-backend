const express = require('express');
const tasksGetter = require('./routes/tasksGetter');
const app = express();


app.use('/getTasks', tasksGetter);

app.get('/', (req, res) => { 
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED' }); 
});

app.listen(5000, () => console.log(`Listening on port 5000`)); 
