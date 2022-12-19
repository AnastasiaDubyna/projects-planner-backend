const express = require('express');
const tasksRouter = require('./routes/tasksRouter');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const jsonParser = bodyParser.json();

app.use(cors({origin: "http://localhost:3000"}));
app.use('/tasks', jsonParser, tasksRouter);

app.listen(5000, () => console.log(`Listening on port 5000`)); 
