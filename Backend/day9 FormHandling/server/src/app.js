const express = require('express');
const uploadRouter = require('./routes/file.route');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/file', uploadRouter);

module.exports = app;