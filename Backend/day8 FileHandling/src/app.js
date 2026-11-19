const express = require('express');
const filterRouter = require('./routes/file.route');

const app = express();

app.use(express.json());

app.get('/', 
    (req, res, next) => {
        console.log('Middleware executed');
        // res.send('Hello from the middleware!');
        next();
        // if (1 !== 1) next();
        // else res.status(403).send('Forbidden');
    }, 
    (req, res) => {
    res.send('Hello, World!');
});

app.use('/file', filterRouter);

module.exports = app;